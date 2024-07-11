import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbobtComponent } from './abobt.component';

describe('AbobtComponent', () => {
  let component: AbobtComponent;
  let fixture: ComponentFixture<AbobtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbobtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbobtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
