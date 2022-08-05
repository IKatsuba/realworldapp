import { Test } from '@nestjs/testing';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TagController } from './tag.controller';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { LoadStrategy, MikroORM } from '@mikro-orm/core';
import { User } from '../user/user.entity';
import { Comment } from '../article/comment.entity';
import { Article } from '../article/article.entity';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Migration20211219155639 } from '../migrations/Migration20211219155639';

describe('TagController', () => {
  let tagController: TagController;
  let tagService: TagService;
  let orm: MikroORM;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        MikroOrmModule.forRoot({
          type: 'mysql' as const,
          host: 'localhost',
          port: 3306,
          user: 'root',
          password: '',
          dbName: 'realworld',
          entities: [User, Tag, Comment, Article],
          debug: true,
          loadStrategy: LoadStrategy.JOINED,
          highlighter: new SqlHighlighter(),
          registerRequestContext: false,
          migrations: {
            migrationsList: [
              {
                name: 'Migration20211219155639.ts',
                class: Migration20211219155639,
              },
            ],
          },
        }),
        MikroOrmModule.forFeature({ entities: [Tag] }),
      ],
      controllers: [TagController],
      providers: [TagService],
    }).compile();

    tagService = module.get<TagService>(TagService);
    tagController = module.get<TagController>(TagController);
    orm = module.get<MikroORM>(MikroORM);
  });

  afterAll(async () => await orm.close(true));

  describe('findAll', () => {
    it('should return an array of tags', async () => {
      const tags: Tag[] = [];
      const createTag = (id: number, name: string) => {
        const tag = new Tag();
        tag.id = id;
        tag.tag = name;
        return tag;
      };
      tags.push(createTag(1, 'angularjs'));
      tags.push(createTag(2, 'reactjs'));

      jest.spyOn(tagService, 'findAll').mockResolvedValue({ tags });

      const findAllResult = await tagController.findAll();
      expect(findAllResult).toMatchObject({ tags });
    });
  });
});
