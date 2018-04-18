import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoryItemComponent } from './user-repository-item.component';

describe('UserRepositoryItemComponent', () => {
  let component: UserRepositoryItemComponent;
  let fixture: ComponentFixture<UserRepositoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepositoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
