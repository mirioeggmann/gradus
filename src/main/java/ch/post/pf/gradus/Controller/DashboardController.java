package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.SubjectRepo;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DashboardController {
    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SubjectRepo subjectRepo;

    @RequestMapping(value = "/webresources/subject", method = RequestMethod.GET)
    public @ResponseBody
    List<Subject> getAllSubjects(){

        List<Subject> subjects = subjectRepo.findAll();

        return subjects;

    }
}
