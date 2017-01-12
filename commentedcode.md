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
```java
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

/**
 * This class provides the methodes for the frontend to load everything that is needed for the semesters.
 * @author manuel.bieri
 * @version 1.0.0 - 03.01.2017
 */
@RestController
@CrossOrigin
public class SemesterController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SemesterRepo semesterRepo;

    @Autowired
    private UserRepo userRepo;

    /**
     * Create a new semester
     * @param semesterView the current semester view
     * @return if the creation worked or not
     */
    @RequestMapping(value = "webresources/semester/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSemester(@RequestBody SemesterView semesterView) {

        Response createResponse = new Response();

        Semester semester = mapper.map(semesterView, Semester.class);

        semesterRepo.save(semester);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    /**
     * Get all semesters
     * @param userID the id of the user which is logged in
     * @return a list of all semesters and response if the query worked or not
     */
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

    /**
     * Get one semester
     * @param id the id of the semester
     * @return the requested semester and response if the query worked or not
     */
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
```
```java
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

/**
 * This class provides the methodes for the frontend to load everything that is needed for the subjects.
 * @author manuel.bieri
 * @version 1.0.0 - 03.01.2017
 */
@RestController
@CrossOrigin
public class SubjectController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private SubjectRepo subjectRepo;

    @Autowired
    private UserRepo userRepo;

    /**
     * Create a new subject
     * @param subjectView the current semester view
     * @return the subject and if the creation worked or not
     */
    @RequestMapping(value = "webresources/subject/create", method = RequestMethod.POST)
    public ResponseEntity<?> createSubject(@RequestBody SubjectView subjectView) {

        Response createResponse = new Response();

        Subject subject = mapper.map(subjectView, Subject.class);

        subjectRepo.save(subject);

        return new ResponseEntity<Response>(createResponse, HttpStatus.OK);

    }

    /**
     * Get all subjects
     * @param userID the user id of the logged in user
     * @return the requested subjects and response if the query worked or not
     */
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

    /**
     * Get one subject
     * @param id the id of the subject
     * @return the requested subject and response if the query worked or not
     */
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
```
```java
package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

/**
 * This class provides the methodes for the frontend to load everything that is needed for the user.
 * @author manuel.bieri
 * @version 1.0.0 - 06.01.2017
 */
@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private UserRepo userRepo;

    /**
     * Create a new user
     * @param userView the current user View
     * @return the user and if the creation worked or not
     */
    @RequestMapping(value = "webresources/user/create", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody UserView userView) {

        Response registrationResponse = new Response();

        registrationResponse.checkIfNull(userView.getFirstname(), "firstname is empty");
        registrationResponse.checkIfNull(userView.getLastname(), "lastname is empty");

        registrationResponse.checkIfNull(userView.getEmail(), "email is empty");
        registrationResponse.checkIfNotEmail(userView.getEmail(), "email in a not valid format");

        registrationResponse.checkIfNull(userView.getPassword(), "password is empty");

        registrationResponse.checkIfNotStrongPW(userView.getPassword(), "password to weak");

        if(!registrationResponse.getState()) {

            User sameEmailUser = userRepo.findOneByEmail(userView.getEmail());
            registrationResponse.checkIfObjectNotNull(sameEmailUser, "email already used");

            if(!registrationResponse.getState()) {

                User user = mapper.map(userView, User.class);
                userRepo.save(user);

                registrationResponse.setMessage(user.getId().toString());

            }
        }

        return new ResponseEntity<Response>(registrationResponse, HttpStatus.OK);

    }

    /**
     * Get all users
     * @return a user list and response if the query worked or not
     */
    @RequestMapping(value = "/webresources/user", method = RequestMethod.GET)
    public @ResponseBody
    List<User> getAllUser(){

        List<User> users = userRepo.findAll();

        return users;

    }

    /**
     * Get one user
     * @param id the id of the user
     * @return the requested user and response if the query worked or not
     */
    @RequestMapping(value = "webresources/user/{id}", method = RequestMethod.GET)
    public ResponseEntity<?>  one(@PathVariable String id) {
        if(id!="" && id.matches("\\d*"))
        {
            Long longId = Long.valueOf(id);
            User user = userRepo.findOne(longId);
            if(user!=null) {
                return new ResponseEntity<User>(user, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    /**
     * Sign in the user.
     * @param userView the current user view
     * @return response if the user new is logged in or not
     */
    @RequestMapping(value = "webresources/user/signin", method = RequestMethod.POST)
    public ResponseEntity<?> signIn(@RequestBody UserView userView) {

        Response response = new Response();

        User user = userRepo.findOneByEmail(userView.getEmail());

        response.checkIfObjectNull(user, "Email / Password not correct");

        if (!response.getState()) {

            response.checkIfNotEqual(user.getPassword(), userView.getPassword(), "Email / Password not correct");

            if (!response.getState()) {

                response.setMessage(user.getId().toString());

            }
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);
    }

}
```
```java
package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.Grade;
import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * This class provides the methodes to get the needed data of the grades
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
public interface GradeRepo extends CrudRepository<Grade, Long> {

    /**
     * Find all grades
     * @return list of grades
     */
    List<Grade> findAll();
    
    /**
     * Find all grades by the creator
     * @param creator the creator of the grade
     * @return list of grades
     */
    List<Grade> findAllByCreator(User creator);
    
    /**
     * Find all grades by the creator and a semester
     * @param creator the creator of the grade
     * @param semester the semester
     * @return list of grades
     */
    List<Grade> findAllByCreatorAndSemester(User creator, Semester semester);
    
    /**
     * Find all grades by the creator and a subject
     * @param creator the creator of the grade
     * @param subject the subject
     * @return list of grades
     */
    List<Grade> findAllByCreatorAndSubject(User creator, Subject subject);


}
```
```java
package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.Semester;
import ch.post.pf.gradus.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * This class provides the methodes to get the needed data of the semesters
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
public interface SemesterRepo extends CrudRepository<Semester, Long> {

    /**
     * Find all semesters
     * @return list of semesters
     */
    List<Semester> findAll();
    
    /**
     * Find all semesters by the creator
     * @param creator the creator of the semester
     * @return list of semesters
     */
    List<Semester> findAllByCreator(User creator);

}
```
```java
package ch.post.pf.gradus.Repositorys;

import ch.post.pf.gradus.Models.Subject;
import ch.post.pf.gradus.Models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * This class provides the methodes to get the needed data of the subjects
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
public interface SubjectRepo extends CrudRepository<Subject, Long> {

    /**
     * Find all subjects
     * @return list of subjects
     */
    List<Subject> findAll();
    
    /**
     * Find all subjects by the creator
     * @param creator the creator of the subject
     * @return list of subjects
     */
    List<Subject> findAllByCreator(User creator);
}
```
```java
package ch.post.pf.gradus.Repositorys;


import ch.post.pf.gradus.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Set;

/**
 * This class provides the methodes to get the needed data of the user
 * @author manuel.bieri
 * @version 1.0.0 - 02.01.2017
 */
public interface UserRepo extends CrudRepository<User, Long> {

    /**
     * Find all users
     * @return list of users
     */
    List<User> findAll();
    
    /**
     * Find a user by his lastname and his firstname
     * @return the searched user
     */
    User findByLastnameAndFirstname(String lastname, String firstname);
    
    /**
     * Find a user by his email
     * @return the searched user
     */
    User findOneByEmail(String email);

}
```
```java

```
```java

```
```java

```
```java

```
```java

```
```java

```
