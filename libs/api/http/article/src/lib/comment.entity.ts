import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '@app/api/http/user';
import { Article } from './article.entity';
import { CommentModel } from '@app/models';

@Entity()
export class Comment implements CommentModel {
  @PrimaryKey()
  id: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @Property()
  body: string;

  @ManyToOne({ entity: () => Article })
  article: Article;

  @ManyToOne({ entity: () => User })
  author: User;

  constructor(author: User, article: Article, body: string) {
    this.author = author;
    this.article = article;
    this.body = body;
  }
}
