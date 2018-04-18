import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepositoryListComponent } from './user-repository-list.component';

describe('UserRepositoryListComponent', () => {
  let component: UserRepositoryListComponent;
  let fixture: ComponentFixture<UserRepositoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepositoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
