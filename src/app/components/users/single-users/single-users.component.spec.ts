import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUsersComponent } from './single-users.component';

describe('SingleUsersComponent', () => {
  let component: SingleUsersComponent;
  let fixture: ComponentFixture<SingleUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
