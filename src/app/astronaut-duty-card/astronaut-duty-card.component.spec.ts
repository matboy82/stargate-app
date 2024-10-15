import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDutyCardComponent } from './astronaut-duty-card.component';

describe('AstronautDutyCardComponent', () => {
  let component: AstronautDutyCardComponent;
  let fixture: ComponentFixture<AstronautDutyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautDutyCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautDutyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
