package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Grade;
import ch.post.pf.gradus.Repositorys.GradeRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class GradeController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private GradeRepo gradeRepo;

    @RequestMapping(value = "webresources/grade/create", method = RequestMethod.POST)
    public ResponseEntity<?> createGrade(@RequestBody UserView userView) {

        Response createResponse = new Response();

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }



}
