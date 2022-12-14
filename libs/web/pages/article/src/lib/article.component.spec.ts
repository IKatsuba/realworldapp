import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleComponent } from './article.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarkdownPipe } from './markdown.pipe';
import { ENVIRONMENT } from '@app/web/core';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ArticleComponent, MarkdownPipe],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: { api_url: '' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
