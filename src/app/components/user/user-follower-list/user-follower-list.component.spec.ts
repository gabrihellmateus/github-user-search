import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowerListComponent } from './user-follower-list.component';

describe('UserFollowerListComponent', () => {
  let component: UserFollowerListComponent;
  let fixture: ComponentFixture<UserFollowerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
