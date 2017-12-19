export class User {

  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: Token | any;


  constructor() {
    this.id = null;
    this.username = '';
    this.password = '';
    this.firstName = '';
    this.lastName = '';
    this.token = null;
  }
}


export class Token {

  roles: Role[];

  group: Group;

  groups: Group[];
}

export class Group {
  id: number;

  name: string;

  create_time: string;
}

export class Role {
  id: number;

  name: string;

  create_time: string;

  update_time: string;
}
