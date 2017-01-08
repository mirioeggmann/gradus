package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Grade;
import ch.post.pf.gradus.Repositorys.GradeRepo;
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

    @RequestMapping(value = "webresources/grade/create", method = RequestMethod.POST)
    public ResponseEntity<?> createGrade(@RequestBody GradeView gradeView) {

        Response createResponse = new Response();

        Grade grade = mapper.map(gradeView, Grade.class);

        gradeRepo.save(grade);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "/webresources/grade", method = RequestMethod.GET)
    public @ResponseBody
    List<Grade> getAllGrade(){

        List<Grade> Grades = gradeRepo.findAll();
        if (Grades.size() > 0) {
            return Grades;
        } else {
            return Collections.emptyList();
        }

    }

    @RequestMapping(value = "webresources/grade/{id}", method = RequestMethod.GET)
    public ResponseEntity<?>  one(@PathVariable String id) {
        if(id!="" && id.matches("\\d*"))
        {
            Long longId = Long.valueOf(id);
            Grade grade = gradeRepo.findOne(longId);
            if(grade!=null) {
                return new ResponseEntity<Grade>(grade, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

}

