package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.SubjectRepo;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.SubjectView;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin
public class SubjectController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SubjectRepo subjectRepo;

    @Autowired
    private UserRepo userRepo;


    @RequestMapping(value = "webresources/subject/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSubject(@RequestBody SubjectView subjectView) {

        Response createResponse = new Response();

        List<Subject> subjects = subjectRepo.findAll();
        Boolean isUsed = subjects.stream().anyMatch(subject -> Objects.equals(subject.getName(), subjectView.getName()));

        createResponse.checkIfTrue(isUsed, "name already used");
        createResponse.checkIfNull(subjectView.getName(), "name not set");

        if(!createResponse.getState()) {
            Subject subject = mapper.map(subjectView, Subject.class);

            subjectRepo.save(subject);
            createResponse.setMessage("subject created");
        }

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);
    }

    @RequestMapping(value = "webresources/subject/delete", method = RequestMethod.POST)
    public ResponseEntity<?> deleteSubject(@RequestBody Subject subject) {

        Response deleteResponse = new Response();

        if(!deleteResponse.getState()) {

            subjectRepo.delete(subject);
            deleteResponse.setMessage("subject deleted");
        }

        return new ResponseEntity<Response>(deleteResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "/webresources/subject/{userID}", method = RequestMethod.GET)
    public ResponseEntity<?> all(@PathVariable Long userID) {

        User creator = userRepo.findOne(userID);
        List<Subject> subjects = subjectRepo.findAllByCreator(creator);
        if (subjects.size() > 0) {
            return new ResponseEntity<List<Subject>>(subjects, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Subject>>(Collections.emptyList(), HttpStatus.OK);
        }

    }

    @RequestMapping(value = "webresources/subject/one/{id}", method = RequestMethod.GET)
    public ResponseEntity<?>  one(@PathVariable String id) {
        if(id!="" && id.matches("\\d*"))
        {
            Long longId = Long.valueOf(id);
            Subject subject = subjectRepo.findOne(longId);
            if(subject!=null) {
                return new ResponseEntity<Subject>(subject, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}
