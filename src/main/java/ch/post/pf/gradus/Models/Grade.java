package ch.post.pf.gradus.Models;

import javax.persistence.*;

@Entity
@Table(name = "GRAD_grade")
public class Grade {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private Double grade;

    private Double weight;

    private Long date;

    private String description;

    @ManyToOne
    @JoinColumn(name = "semester_Id")
    private Semester semester;

    @ManyToOne
    @JoinColumn(name = "subject_Id")
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "creator_Id")
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

    public Double getGrade() {
        return grade;
    }

    public void setGrade(Double grade) {
        this.grade = grade;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Long getDate() {
        return date;
    }

    public void setDate(Long date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Semester getSemester() {
        return semester;
    }

    public void setSemester(Semester semester) {
        this.semester = semester;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }
}
