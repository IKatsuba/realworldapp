import { UserModel } from './user.model';

export interface ProfileModel extends UserModel {
  following?: boolean;
}
