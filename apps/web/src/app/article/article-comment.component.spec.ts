import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentComponent } from './article-comment.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarkdownPipe } from './markdown.pipe';

describe('ArticleCommentComponent', () => {
  let component: ArticleCommentComponent;
  let fixture: ComponentFixture<ArticleCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ArticleCommentComponent, MarkdownPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
