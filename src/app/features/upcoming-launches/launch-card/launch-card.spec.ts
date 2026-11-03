import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCard } from './launch-card';

describe('LaunchCard', () => {
  let component: LaunchCard;
  let fixture: ComponentFixture<LaunchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
