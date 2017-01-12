```java
package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.SubjectRepo;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class provides the methodes for the frontend to load everything that is needed on of the dashboard.
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
@RestController
@CrossOrigin
public class DashboardController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SubjectRepo subjectRepo;

    /**
     * Get all subjects when calling the given url of the rest api
     * @return a list of subjects
     */
    @RequestMapping(value = "/webresources/subject", method = RequestMethod.GET)
    public @ResponseBody
    List<Subject> getAllSubjects(){

        List<Subject> subjects = subjectRepo.findAll();

        return subjects;

    }
}

```

```java
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

/**
 * This class provides the methodes for the frontend to load everything that is needed for the grades.
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
@RestController
@CrossOrigin
public class GradeController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private GradeRepo gradeRepo;

    /**
     * Create a new grade
     * @param userView the current view of the user
     * @return if the creation worked or not
     */
    @RequestMapping(value = "webresources/grade/create", method = RequestMethod.POST)
    public ResponseEntity<?> createGrade(@RequestBody UserView userView) {

        Response createResponse = new Response();

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }
}

```
