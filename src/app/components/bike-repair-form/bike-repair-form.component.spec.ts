import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeRepairFormComponent } from './bike-repair-form.component';

describe('BikeRepairFormComponent', () => {
  let component: BikeRepairFormComponent;
  let fixture: ComponentFixture<BikeRepairFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeRepairFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeRepairFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
