package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

    User findByLastnameAndFirstname(String lastname, String firstname);

}
