import { CommentModel } from '@app/models';

export interface Comment extends CommentModel {
  createdAt: string;
}
