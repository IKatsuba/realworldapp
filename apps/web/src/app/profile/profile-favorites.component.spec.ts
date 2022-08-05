import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavoritesComponent } from './profile-favorites.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleListComponent, ListErrorsComponent } from '../shared';

describe('ProfileFavoritesComponent', () => {
  let component: ProfileFavoritesComponent;
  let fixture: ComponentFixture<ProfileFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        ProfileFavoritesComponent,
        ListErrorsComponent,
        ArticleListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
