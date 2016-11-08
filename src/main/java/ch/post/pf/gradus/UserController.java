package ch.post.pf.gradus;

import ch.post.pf.gradus.Models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @RequestMapping(value = "webresources/getuser", method = RequestMethod.GET)
    ResponseEntity<?> getUser() {

        User user = new User();

        return new ResponseEntity<User>(user, HttpStatus.OK);

    }

}
