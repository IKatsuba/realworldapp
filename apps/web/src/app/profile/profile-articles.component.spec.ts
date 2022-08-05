import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArticlesComponent } from './profile-articles.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleListComponent, ListErrorsComponent } from '@app/web/shared';
import { ENVIRONMENT } from '@app/web/core';

describe('ProfileArticlesComponent', () => {
  let component: ProfileArticlesComponent;
  let fixture: ComponentFixture<ProfileArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        ProfileArticlesComponent,
        ListErrorsComponent,
        ArticleListComponent,
      ],
      providers: [
        {
          provide: ENVIRONMENT,
          useValue: { api_url: '' },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
