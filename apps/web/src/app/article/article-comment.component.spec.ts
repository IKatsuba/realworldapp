import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentComponent } from './article-comment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarkdownPipe } from './markdown.pipe';
import { ENVIRONMENT } from '@app/web/core';

describe('ArticleCommentComponent', () => {
  let component: ArticleCommentComponent;
  let fixture: ComponentFixture<ArticleCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ArticleCommentComponent, MarkdownPipe],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: { api_url: '' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
