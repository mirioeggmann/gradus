package ch.post.pf.gradus.Response;

import java.util.ArrayList;

public class Response {

    private boolean state;
    private ArrayList<String> errors;
    private String message;

    public Response() {
        this.state = false;
        this.errors = new ArrayList<String>();
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public boolean getState(){
        return state;
    }

    public ArrayList<String> getErrors() {
        return errors;
    }

    public void setErrors(ArrayList<String> errors) {
        this.errors = errors;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void addError(String error){
        this.state = true;
        this.errors.add(error);
    }

    /**
     * Add an error if Null
     * @param value value
     * @param error error
     */
    public void checkIfNull(String value, String error){
        if(null == value || value.equals("")){
            addError(error);
        }
    }

    /**
     * Add an error if Not Null
     * @param value value
     * @param error error
     */
    public void checkIfNotNull(String value, String error){
        if(null != value || !value.equals("")){
            addError(error);
        }
    }
    /**
     * Add an error if Null
     * @param value value
     * @param error error
     */
    public void checkIfObjectNull(Object value, String error){
        if(null == value){
            addError(error);
        }
    }

    /**
     * Add an error if Not Null
     * @param value value
     * @param error error
     */
    public void checkIfObjectNotNull(Object value, String error){
        if(null != value){
            addError(error);
        }
    }
    /**
     * Add an error if Not Equal
     * @param a value
     * @param b value
     * @param error error
     */
    public void checkIfNotEqual(String a, String b, String error){
        if(null != a && null != b && !a.equals(b)){
            addError(error);
        }
    }

    /**
     * Add an error if Equal
     * @param a value
     * @param b value
     * @param error error
     */
    public void checkIfEqual(String a, String b, String error){
        if(null != a && null != b && a.equals(b)){
            addError(error);
        }
    }

    /**
     * Add an error if the param is true
     * @param a boolean value which
     * @param error the error message which will be added to the error array
     */
    public void checkIfTrue(Boolean a, String error){
        if(a != null && a){
            addError(error);
        }
    }

    /**
     * Add an error if the param is false
     * @param a
     * @param error
     */
    public void checkIfFalse(Boolean a, String error){
        if(a != null && !a){
            addError(error);
        }
    }

    /**
     * Add an error if the param does not match a given pattern
     * @param a
     * @param pattern the pattern is a regex
     * @param error
     */
    public void checkIfPatternDontMatch(String a, String pattern, String error){
        if(a != null && !a.matches(pattern)){
            addError(error);
        }
    }

    /**
     * Add an error if the parameter is not an Email address.
     * @param a
     * @param error
     */
    public void checkIfNotEmail(String a, String error){
        if(a != null && !a.matches("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")){
            addError(error);
        }
    }

    /**
     * Adds an error if the parameter does not fit the password requirements
     * @param a
     * @param error
     */
    public void checkIfNotStrongPW(String a, String error){
        if(a != null && !a.matches("^(?=\\S*[A-Z])(?=\\S*[a-z])(?=\\S*[0-9])(?=\\S*[!-/:-@\\[-`{-~£])\\S{8,}$")){
            addError(error);
        }
    }

    public void checkIfGreaterThan(Long value, Long comparisonValue, String error){
        if(value > comparisonValue){
            addError(error);
        }
    }


}