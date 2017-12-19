export class RobotModel {
  packageName: string;
  robotName: string;

  constructor(packageName, robotName) {
    this.packageName = packageName;
    this.robotName = robotName;
  }
}


export class RobotViewModel {
  domains: Domain[];

}

export class Domain {
  name: string;
  packages: string[];

  constructor(name, packages) {
    this.name = name;
    this.packages = packages;
  }
}


export class SimpleRobot {
  userId;
  packageId;
  robotId;
  access;
  robotSrcCode;
}

export class Robot {
  id;
  userId;
  packageId;
  robotId;
  access;
  filePath;
  createdDate;
  updatedDate;
  robotSrcCode;
  groupId;

  constructor(param) {
    this.id = param.id;
    this.userId = param.userId;
    this.packageId = param.packageId;
    this.robotId = param.robotId;
    this.access = param.access;
    this.filePath = param.filePath;
    this.createdDate = param.createdDate;
    this.updatedDate = param.updatedDate;
    this.robotSrcCode = param.robotSrcCode;
    this.groupId = param.groupId;
  }
}
