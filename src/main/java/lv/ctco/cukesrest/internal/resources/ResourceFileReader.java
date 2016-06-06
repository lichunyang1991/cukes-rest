package lv.ctco.cukesrest.internal.resources;

import com.google.common.base.*;
import com.google.inject.*;
import lv.ctco.cukesrest.*;
import org.apache.commons.io.*;

import java.io.*;
import java.util.*;

public class ResourceFileReader {

    @Inject
    FilePathService pathService;

    public String read(String path) {
    	System.out.println("jsonBody from jsonpath is:"+Joiner.on("").join(readLines(path)));
        return Joiner.on("").join(readLines(path));
    }

    public List<String> readLines(String path) {
        try {
            String normalizedPath = pathService.normalize(path);
            File file = new File(normalizedPath);
            return FileUtils.readLines(file);
        } catch (IOException e) {
            throw new CukesRuntimeException(e);
        }
    }
}
