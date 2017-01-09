package ch.post.pf.gradus.ViewModel;


import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.ViewModel.User.UserView;

public class SubjectView {

    private Long id;

    private String name;

    private User creator;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public User getCreator() {
        return creator;
    }


}
