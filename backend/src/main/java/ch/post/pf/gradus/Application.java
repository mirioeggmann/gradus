package ch.post.pf.gradus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

  private static Class<Application> applicationClass = Application.class;

  public static void main(String[] args) {
    SpringApplication.run(applicationClass, args);
  }

  @Override
  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
    /**
     * setRegisterErrorPageFilter to false in order to prevent ErrorPageFilter Errors like:
     * 
     * 2015-12-10 09:19:31.600 ERROR 16 --- [io-8080-exec-20] o.s.boot.context.web.ErrorPageFilter :
     * Cannot forward to error page for request [/webresources/exampleresource] as the Response has
     * already been committed. As a result, the Response may have the wrong status code. If your
     * application is running on WebSphere Application Server you may be able to resolve this
     * problem by setting com.ibm.ws.webcontainer.invokeFlushAfterService to false
     * 
     * Source: http://goo.gl/FQzxn3
     */
    setRegisterErrorPageFilter(false);

    return application.sources(applicationClass);
  }

}
