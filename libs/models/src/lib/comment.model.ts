import { UserModel } from './user.model';

export interface CommentModel {
  id: number;
  body: string;
  author: UserModel;
}
