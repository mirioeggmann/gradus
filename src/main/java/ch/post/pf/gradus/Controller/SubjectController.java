package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Repositorys.SubjectRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class SubjectController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SubjectRepo subjectRepo;

    @RequestMapping(value = "webresources/subject/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSubject(@RequestBody UserView userView) {

        Response createResponse = new Response();

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }



}
