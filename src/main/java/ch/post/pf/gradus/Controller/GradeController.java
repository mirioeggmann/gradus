package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Grade;
import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.GradeRepo;
import ch.post.pf.gradus.Repositorys.SemesterRepo;
import ch.post.pf.gradus.Repositorys.SubjectRepo;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.GradeView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class GradeController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private GradeRepo gradeRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private SemesterRepo semesterRepo;

    @Autowired
    private SubjectRepo subjectRepo;


    @RequestMapping(value = "webresources/grade/create", method = RequestMethod.POST)
    public ResponseEntity<?> createGrade(@RequestBody GradeView gradeView) {

        Response createResponse = new Response();

        Grade grade = mapper.map(gradeView, Grade.class);

        gradeRepo.save(grade);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "webresources/grade/delete/{gradeID}", method = RequestMethod.GET)
    public ResponseEntity<?> deleteGrade(@PathVariable Long gradeID) {

        Response createResponse = new Response();

        gradeRepo.delete(gradeID);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "webresources/grade/{userID}", method = RequestMethod.GET)
    public ResponseEntity<?> allUser(@PathVariable Long userID) {

        User creator = userRepo.findOne(userID);
        List<Grade> grades = gradeRepo.findAllByCreator(creator);
        if (grades.size() > 0) {
            return new ResponseEntity<List<Grade>>(grades, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Grade>>(Collections.emptyList(), HttpStatus.OK);
        }
    }

    @RequestMapping(value = "webresources/grade/{userID}/semester/{semesterID}", method = RequestMethod.GET)
    public ResponseEntity<?> allSemester(@PathVariable Long userID, @PathVariable Long semesterID) {

        User creator = userRepo.findOne(userID);
        Semester semester = semesterRepo.findOne(semesterID);

        List<Grade> grades = gradeRepo.findAllByCreatorAndSemester(creator, semester);
        if (grades.size() > 0) {
            return new ResponseEntity<List<Grade>>(grades, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Grade>>(Collections.emptyList(), HttpStatus.OK);
        }
    }

    @RequestMapping(value = "webresources/grade/{userID}/subject/{subjectID}", method = RequestMethod.GET)
    public ResponseEntity<?> allSubject(@PathVariable Long userID, @PathVariable Long subjectID) {

        User creator = userRepo.findOne(userID);
        Subject subject = subjectRepo.findOne(subjectID);

        List<Grade> grades = gradeRepo.findAllByCreatorAndSubject(creator, subject);
        if (grades.size() > 0) {
            return new ResponseEntity<List<Grade>>(grades, HttpStatus.OK);
        } else {
            return new ResponseEntity<List<Grade>>(Collections.emptyList(), HttpStatus.OK);
        }
    }


    @RequestMapping(value = "webresources/grade/one/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> one(@PathVariable String id) {
        if(id!="" && id.matches("\\d*"))
        {
            Long longId = Long.valueOf(id);
            Grade grade = gradeRepo.findOne(longId);
            if(grade!=null) {
                return new ResponseEntity<Grade>(grade, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}

