import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowButtonComponent } from './follow-button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowAuthedDirective } from '../show-authed.directive';

describe('FollowButtonComponent', () => {
  let component: FollowButtonComponent;
  let fixture: ComponentFixture<FollowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [FollowButtonComponent, ShowAuthedDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
