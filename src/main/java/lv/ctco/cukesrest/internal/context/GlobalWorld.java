package lv.ctco.cukesrest.internal.context;

import com.google.inject.*;
import lv.ctco.cukesrest.*;
import util.FileUtil;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.concurrent.*;

import static lv.ctco.cukesrest.CukesOptions.*;

@Singleton
class GlobalWorld {

    private final Map<String, String> context = new ConcurrentHashMap<String, String>();
    private final Map<String, Long> contextWithLong = new ConcurrentHashMap<String, Long>();

    public GlobalWorld() {
        /* User Specified Values */
        Properties prop = new Properties();
        URL url = GlobalWorld.class.getClassLoader().getResource("cukes.properties");
        if (url != null) {
            try {
                prop.load(url.openStream());
                loadContextFromProperties(prop);
                loadContextFromProperties(System.getProperties());
            } catch (IOException e) {
                throw new CukesRuntimeException(e);
            }
        }

        /* World Default Values */
        defaultProperty(RESOURCES_ROOT, "src/test/resources/");
        defaultProperty(BASE_URI, "https://www.fsceshi.com");
        //defaultProperty(BASE_URI, "http://hj.fsfte.com");

        defaultProperty(ASSERTIONS_DISABLED, false);
        defaultProperty(URL_ENCODING_ENABLED, false);
        defaultProperty(CONTEXT_INFLATING_ENABLED, true);
        defaultProperty(RELAXED_HTTPS, true);

        defaultProperty(LOADRUNNER_FILTER_BLOCKS_REQUESTS, false);
        
        //为了发送每个请求前，都配置一个FSAuthX这个cookie，以便保留会话的cookie信息
        //defaultProperty("FSAuthX", FileUtil.readfile("FSAuthXStr.txt").replace("\n", ""));
        //defaultProperty(CONTENT_TYPE, "application/json");
        
    }

    public void put(@CaptureContext.Pattern String key, @CaptureContext.Value String value) {
        context.put(key, value);
    }
    
    public void put(@CaptureContext.Pattern String key, @CaptureContext.Value long value) {
    	contextWithLong.put(key, value);
    }

    @SuppressWarnings("unchecked")
    public String get(String key) {
        return context.get(key);
    }
    
    public long getLong(String key) {
        return contextWithLong.get(key);
    }

    private void loadContextFromProperties(Properties prop) {
        Set<Map.Entry<Object, Object>> properties = prop.entrySet();
        for (Map.Entry<Object, Object> property : properties) {
            String key = property.getKey().toString();
            if (key.startsWith(PROPERTIES_PREFIX)) {
                String value = key.split(PROPERTIES_PREFIX)[1];
                if (property.getValue() instanceof String) {
                    put(value, property.getValue().toString());
                }
            }
        }
    }

    private void defaultProperty(String key, Object defaultValue) {
        String value = context.get(key);
        if (value == null) {
            put(key, String.valueOf(defaultValue));
        }
    }
}
