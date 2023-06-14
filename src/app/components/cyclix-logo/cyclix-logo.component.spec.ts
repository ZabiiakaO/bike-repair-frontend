import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclixLogoComponent } from './cyclix-logo.component';

describe('CyclixLogoComponent', () => {
  let component: CyclixLogoComponent;
  let fixture: ComponentFixture<CyclixLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyclixLogoComponent]
    });
    fixture = TestBed.createComponent(CyclixLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
