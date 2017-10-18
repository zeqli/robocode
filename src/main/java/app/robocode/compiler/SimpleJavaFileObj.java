package app.robocode.compiler;


import javax.tools.SimpleJavaFileObject;
import java.net.URI;


public class SimpleJavaFileObj extends SimpleJavaFileObject{
	private final String code;

	public SimpleJavaFileObj(String name,String code){
		super(URI.create("string:///"+name.replace('.','/')+Kind.SOURCE.extension),Kind.SOURCE);
		this.code=code;
	}

	public CharSequence getCharContent(boolean ignoreEncodingErrors){
		return code;
	}
}
