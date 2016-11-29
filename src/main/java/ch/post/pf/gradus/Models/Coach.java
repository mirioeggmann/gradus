package ch.post.pf.gradus.Models;

import javax.persistence.*;

@Entity
@Table(name = "GRAD_coach")
public class Coach {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "coach_Id")
    private User coach;

    @ManyToOne
    @JoinColumn(name = "trainee_Id")
    private User trainee;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getCoach() {
        return coach;
    }

    public void setCoach(User coach) {
        this.coach = coach;
    }

    public User getTrainee() {
        return trainee;
    }

    public void setTrainee(User trainee) {
        this.trainee = trainee;
    }

}
