package ch.post.pf.gradus.Repositorys;

import ch.post.pf.gradus.Models.Subject;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by meeggm on 02.12.2016.
 */
public interface SubjectRepo extends CrudRepository<Subject, Long> {
    List<Subject> findAll();
}
