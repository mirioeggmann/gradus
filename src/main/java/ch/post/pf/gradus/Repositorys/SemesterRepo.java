package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.Semester;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SemesterRepo extends CrudRepository<Semester, Long> {

    List<Semester> findAll();

}
