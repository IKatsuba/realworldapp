import { ArticleModel } from '@app/models';

export interface Article extends ArticleModel {
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
}
