import {Semester} from "./semester.model";
import {Subject} from "./subject.model";
import {User} from "./user.model";

export class Grade{

  constructor(){};

  id : number;
  name : string;
  grade : number;
  weight: number;
  date: number;
  description: string;
  semester: Semester;
  subject: Subject;
  creator: User;

}
