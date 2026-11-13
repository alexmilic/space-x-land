import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautDetails } from './astronaut-details';

describe('AstronautDetails', () => {
  let component: AstronautDetails;
  let fixture: ComponentFixture<AstronautDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
