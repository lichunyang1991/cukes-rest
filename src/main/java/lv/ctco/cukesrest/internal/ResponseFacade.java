package lv.ctco.cukesrest.internal;

import com.google.inject.*;
import com.jayway.restassured.response.*;
import lv.ctco.cukesrest.*;
import lv.ctco.cukesrest.internal.context.*;
import lv.ctco.cukesrest.internal.switches.*;
import util.PropertiesUtil;

import java.util.*;
import java.util.concurrent.*;

import static com.jayway.awaitility.Awaitility.*;

@Singleton
@InflateContext
public class ResponseFacade {

    @Inject
    RequestSpecificationFacade specification;
    @Inject
    GlobalWorldFacade world;
    @Inject
    Set<CukesRestPlugin> pluginSet;

    private Response response;

    public void doRequest(String httpMethod, final String url) throws Exception {
    	//汇聚登录cookie
        HashMap<String, String> cookie = PropertiesUtil.getProperties();
        specification.cookies(cookie);
        
        final HttpMethod method = HttpMethod.parse(httpMethod);

        // TODO: Should be refactored into CukesRestPlugin
        Boolean filterEnabled = world.getBoolean(CukesOptions.LOADRUNNER_FILTER_BLOCKS_REQUESTS);
        AwaitCondition awaitCondition = specification.awaitCondition();
        if (awaitCondition != null && !filterEnabled) {
            int intervalTime = awaitCondition.getInterval().getValue();
            TimeUnit intervalUnit = awaitCondition.getInterval().getUnitDict().getTimeUnit();

            int waitTime = awaitCondition.getWaitTime().getValue();
            TimeUnit unit = awaitCondition.getWaitTime().getUnitDict().getTimeUnit();

            // TODO Fix
            with().pollInterval(intervalTime, intervalUnit).
                await().atMost(waitTime, unit).until(doRequest(url, method), awaitCondition.getResponseMatcher());
        } else {
            doRequest(url, method).call();
        }
        specification.initNewSpecification();
    }

    private void authenticate() {
        String type = world.get(CukesOptions.AUTH_TYPE);
        if (type == null) return;

        if (type.equalsIgnoreCase("BASIC")) {
            authBasic();
        }
    }

    private Callable<ResponseWrapper> doRequest(final String url, final HttpMethod method) {
        return new Callable<ResponseWrapper>() {
            @Override
            public ResponseWrapper call() throws Exception {
                authenticate();
                for (CukesRestPlugin cukesRestPlugin : pluginSet) {
                    cukesRestPlugin.beforeRequest();
                }
                response = method.doRequest(specification.value(), url);
                for (CukesRestPlugin cukesRestPlugin : pluginSet) {
                    cukesRestPlugin.afterRequest();
                }
                return new ResponseWrapper(response);
            }
        };
    }

    public Response response() {
        return response;
    }

    private void authBasic() {
        String username = world.get(CukesOptions.USERNAME);
        String password = world.get(CukesOptions.PASSWORD);
        specification.basicAuthentication(username, password);
    }
}
