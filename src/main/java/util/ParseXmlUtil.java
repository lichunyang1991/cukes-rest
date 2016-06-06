package util;

import java.io.IOException;
import java.io.StringReader;
import java.util.HashMap;
import java.util.List;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.JDOMException;
import org.jdom.Namespace;
import org.jdom.input.SAXBuilder;
import org.xml.sax.InputSource;

public class ParseXmlUtil {
        
    public static HashMap<String, String> xmlElements4FX(String xmlDoc) {
    	HashMap<String, String> resultMap = new HashMap<String, String>();
        //创建一个新的字符串
        StringReader read = new StringReader(xmlDoc);
        //创建新的输入源SAX 解析器将使用 InputSource 对象来确定如何读取 XML 输入
        InputSource source = new InputSource(read);
        //创建一个新的SAXBuilder
        SAXBuilder sb = new SAXBuilder();
        try {
            //通过输入源构造一个Document
            Document doc = sb.build(source);
            //取的根元素
            Element root = doc.getRootElement();
            System.out.println("根元素："+root.getName());//输出根元素的名称（测试）
            //得到根元素所有子元素的集合
            List jiedian = root.getChildren();
            System.out.println("jiedian.size()="+jiedian.size());
            //获得XML中的命名空间（XML中未定义可不写）
            Namespace ns = root.getNamespace();
            Element et = null;
            int size = jiedian.size();
            if(size==1){
            	et = (Element) jiedian.get(0);//循环依次得到子元素
                resultMap.put("Status", et.getAttributeValue("Status"));
                resultMap.put("Code", et.getAttributeValue("Code"));
                resultMap.put("Msg", et.getAttributeValue("Msg"));
            }else if(size==2){
            	et = (Element) jiedian.get(0);//循环依次得到子元素
                resultMap.put("Status", et.getAttributeValue("Status"));
                resultMap.put("Code", et.getAttributeValue("Code"));
                resultMap.put("Msg", et.getAttributeValue("Msg"));
                
                Element et2 = (Element)jiedian.get(1);
                resultMap.put("jsonResult", et2.getText());
            }
            
        } catch (JDOMException e) {
            // TODO 自动生成 catch 块
            e.printStackTrace();
        } catch (IOException e) {
            // TODO 自动生成 catch 块
            e.printStackTrace();
        }
        return resultMap;
    }
    
    public static void main(String[] args){
    	ParseXmlUtil doc = new ParseXmlUtil();
                
        String xmlDoc = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
        		"<FHE><Result Status=\"6\" Code=\"0\" Msg=\"联系人ID不能为空\" /></FHE>";
        System.out.println(doc.xmlElements4FX(xmlDoc));
        
        String xmlDoc2 = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
        		"<FHE><Result Status=\"0\" Code=\"0\"/><Data DataType=\"Json/P\">{\"M1\":{\"M1\":\"7b376ae6231a4d5da0aece7cce4969e0\"}}</Data></FHE>";
        System.out.println(doc.xmlElements4FX(xmlDoc2));
        
        
    }
}