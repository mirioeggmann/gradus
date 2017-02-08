package ch.post.pf.gradus.ViewModel;


import ch.post.pf.gradus.Models.User;
import ch.post.pf.gradus.ViewModel.User.UserView;

public class SemesterView {

    private String name;

    private UserView creator;

    private Long start;

    private Long end;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getStart() {
        return start;
    }

    public void setStart(Long start) {
        this.start = start;
    }

    public Long getEnd() {
        return end;
    }

    public void setEnd(Long end) {
        this.end = end;
    }

    public UserView getCreator() {
        return creator;
    }

    public void setCreator(UserView creator) {
        this.creator = creator;
    }

}
