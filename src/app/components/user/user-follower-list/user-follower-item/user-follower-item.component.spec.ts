import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowerItemComponent } from './user-follower-item.component';

describe('UserFollowerItemComponent', () => {
  let component: UserFollowerItemComponent;
  let fixture: ComponentFixture<UserFollowerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
