package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.SemesterRepo;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class SemesterController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SemesterRepo semesterRepo;

    @RequestMapping(value = "webresources/semester/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSemester(@RequestBody UserView userView) {

        Response createResponse = new Response();

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

}
