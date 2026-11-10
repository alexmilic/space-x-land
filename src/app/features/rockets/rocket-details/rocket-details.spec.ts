import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetails } from './rocket-details';

describe('RocketDetails', () => {
  let component: RocketDetails;
  let fixture: ComponentFixture<RocketDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RocketDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
