package ch.post.pf.gradus.Controller;

import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.Repositorys.UserRepo;
import ch.post.pf.gradus.Response.Response;
import ch.post.pf.gradus.ViewModel.User.UserRegistrationView;
import ch.post.pf.gradus.ViewModel.User.UserView;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private DozerBeanMapper mapper;

    @Autowired
    private UserRepo userRepo;

    @RequestMapping(value = "webresources/user/register", method = RequestMethod.GET)
    ResponseEntity<?> getRegisterUser() {

        UserRegistrationView userView = new UserRegistrationView();

        return new ResponseEntity<UserRegistrationView>(userView, HttpStatus.OK);

    }

    @RequestMapping(value = "webresources/user/register", method = RequestMethod.POST)
    ResponseEntity<?> registerUser(@RequestBody UserRegistrationView userRegistration) {

        Response registrationResponse = new Response();

        registrationResponse.checkIfNull(userRegistration.getFirstname(), "Vorname nicht gesetzt");
        registrationResponse.checkIfNull(userRegistration.getLastname(), "Nachname nicht gesetzt");
        registrationResponse.checkIfNull(userRegistration.getBirthday().toString(), "Geburtstag nicht gesetzt");

        registrationResponse.checkIfNull(userRegistration.getEmail(), "E-Mail nicht gesetzt");
        registrationResponse.checkIfNotEmail(userRegistration.getEmail(), "E-Mail ist kein gültiges Format");

        registrationResponse.checkIfNull(userRegistration.getPassword(), "Passwort nicht gesetzt");
        registrationResponse.checkIfNull(userRegistration.getPasswordRepeat(), "Wiederholung nicht gesetzt");

        registrationResponse.checkIfNotEqual(userRegistration.getPassword(), userRegistration.getPasswordRepeat(), "Passwörter stimmen nicht überein");
        registrationResponse.checkIfNotStrongPW(userRegistration.getPassword(), "Passwort zu schwach - haha noob");

        if (!registrationResponse.getState()) {

            User user = mapper.map(userRegistration, User.class);

            userRepo.save(user);

        }


        return new ResponseEntity<Response>(registrationResponse, HttpStatus.OK);

    }

}
