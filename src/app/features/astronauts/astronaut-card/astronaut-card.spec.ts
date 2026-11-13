import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautCard } from './astronaut-card';

describe('AstronautCard', () => {
  let component: AstronautCard;
  let fixture: ComponentFixture<AstronautCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
