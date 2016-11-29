package ch.post.pf.gradus;

import org.dozer.DozerBeanMapper;
import org.dozer.spring.DozerBeanMapperFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

@Configuration
public class DozerConfiguration {

    @Bean
    public DozerBeanMapperFactoryBean mapper() {
        DozerBeanMapperFactoryBean mapper = new DozerBeanMapperFactoryBean();
        mapper.setMappingFiles(new Resource[]{new ClassPathResource("dozer-mapping.xml")});
        return mapper;
    }

    @Bean
    public DozerBeanMapper dozerBeanMapper(DozerBeanMapperFactoryBean dozerBeanMapperFactoryBean)
            throws Exception {
        return (DozerBeanMapper) dozerBeanMapperFactoryBean.getObject();
    }

}
