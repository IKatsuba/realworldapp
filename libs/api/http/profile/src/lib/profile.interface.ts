import { ProfileModel } from '@app/models';

export interface IProfileData extends ProfileModel {}

export interface IProfileRO {
  profile: IProfileData;
}
