import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowAuthedDirective } from '../show-authed.directive';
import { ArticleMetaComponent } from './article-meta.component';
import { FavoriteButtonComponent } from '../buttons/favorite-button.component';
import { ENVIRONMENT } from '@app/web/core';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        ArticleListComponent,
        ShowAuthedDirective,
        ArticleMetaComponent,
        FavoriteButtonComponent,
      ],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: { api_url: '' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
