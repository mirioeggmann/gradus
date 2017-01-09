package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SemesterRepo extends CrudRepository<Semester, Long> {

    List<Semester> findAll();
    List<Semester> findAllByCreator(User creator);

}
