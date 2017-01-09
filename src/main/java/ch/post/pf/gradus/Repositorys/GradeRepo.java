package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.Grade;
import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GradeRepo extends CrudRepository<Grade, Long> {

    List<Grade> findAll();
    List<Grade> findAllByCreator(User creator);
    List<Grade> findAllByCreatorAndSemester(User creator, Semester semester);
    List<Grade> findAllByCreatorAndSubject(User creator, Subject subject);


}
