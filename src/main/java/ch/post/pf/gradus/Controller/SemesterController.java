package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.SemesterRepo;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.SemesterView;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class SemesterController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SemesterRepo semesterRepo;

    @Autowired
    private UserRepo userRepo;


    @RequestMapping(value = "webresources/semester/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSemester(@RequestBody SemesterView semesterView) {

        Response createResponse = new Response();

        Semester semester = mapper.map(semesterView, Semester.class);

        semesterRepo.save(semester);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "/webresources/semester/{userID}", method = RequestMethod.GET)
    public ResponseEntity<?> all(@PathVariable Long userID) {

        User creator = userRepo.findOne(userID);
        List<Semester> semesters = semesterRepo.findAllByCreator(creator);
        if (semesters.size() > 0) {
            return new ResponseEntity<List<Semester>>(semesters, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Semester>>(Collections.emptyList(), HttpStatus.NOT_FOUND);
        }

    }

    @RequestMapping(value = "webresources/semester/one/{id}", method = RequestMethod.GET)
    public ResponseEntity<?>  one(@PathVariable String id) {
        if(id!="" && id.matches("\\d*"))
        {
            Long longId = Long.valueOf(id);
            Semester semester = semesterRepo.findOne(longId);
            if(semester!=null) {
                return new ResponseEntity<Semester>(semester, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}
