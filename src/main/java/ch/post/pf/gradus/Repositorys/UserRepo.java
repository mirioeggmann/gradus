package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Set;

public interface UserRepo extends CrudRepository<User, Long> {

    List<User> findAll();
    User findByLastnameAndFirstname(String lastname, String firstname);
    User findByEmail(String email);

}
