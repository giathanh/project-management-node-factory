import { ActiveFlag, DeleteFlag } from './_common';

export enum Role {
  Admin = 1,
  'Group Leader' = 2,
  Leader = 3,
  'Sub Leader' = 4,
  Member = 5
}

export enum Sex {
  Man = 1,
  Woman = 2
}

export interface UserMainAttr {
  email: string;
  password: string;
  role: Role;
  activeFlag: ActiveFlag;
  firstName: string;
  lastName: string;
  deletedFlag: DeleteFlag;
  sex: Sex;
  birthday: Date;
}