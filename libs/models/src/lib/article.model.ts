import { UserModel } from './user.model';

export interface ArticleModel {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  favoritesCount: number;
  author: UserModel;
}
