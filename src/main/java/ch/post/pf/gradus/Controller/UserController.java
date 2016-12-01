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

import java.util.List;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private UserRepo userRepo;

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

            User sameEmailUser = userRepo.findByEmail(userView.getEmail());
            registrationResponse.checkIfObjectNotNull(sameEmailUser, "email already used");

            if(!registrationResponse.getState()) {

                User user = mapper.map(userView, User.class);
                userRepo.save(user);

                registrationResponse.setMessage("User created");

            }
        }

        return new ResponseEntity<Response>(registrationResponse, HttpStatus.OK);

    }

    @RequestMapping(value = "/webresources/user", method = RequestMethod.GET)
    public @ResponseBody
    List<User> getAllUser(){

        List<User> users = userRepo.findAll();

        return users;

    }

    @RequestMapping(value = "webresources/user/signin", method = RequestMethod.POST)
    public ResponseEntity<?> signIn(@RequestBody UserView userView) {

        Response response = new Response();

        User user = userRepo.findByEmail(userView.getEmail());

        response.checkIfObjectNull(user, "Email / Password not correct");

        if(!response.getState()) {

            response.checkIfNotEqual(user.getPassword(), userView.getPassword(), "Email / Password not correct");

            if (!response.getState()) {

                response.setMessage("valid logindata");

            }
        }

        return new ResponseEntity<Response>(response, HttpStatus.OK);

    }

}
