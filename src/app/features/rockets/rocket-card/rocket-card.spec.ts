import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketCard } from './rocket-card';

describe('RocketCard', () => {
  let component: RocketCard;
  let fixture: ComponentFixture<RocketCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
