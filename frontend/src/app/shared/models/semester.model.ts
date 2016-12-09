export class Semester{
  constructor(id, name, creator) {
    this.id = id;
    this.name = name;
    this.creator = creator;
  }

  id : number;
  name : string;
  creator : number;
  start : Date;
  end: Date;
}
