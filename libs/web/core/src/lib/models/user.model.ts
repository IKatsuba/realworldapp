import { UserModel } from '@app/models';

export interface User extends UserModel {
  token: string;
}
