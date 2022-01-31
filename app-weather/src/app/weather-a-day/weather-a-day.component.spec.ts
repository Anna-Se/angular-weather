import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherADayComponent } from './weather-a-day.component';

describe('WeatherADayComponent', () => {
  let component: WeatherADayComponent;
  let fixture: ComponentFixture<WeatherADayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherADayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherADayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
