import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctiontestComponent } from './functiontest.component';

describe('FunctiontestComponent', () => {
  let component: FunctiontestComponent;
  let fixture: ComponentFixture<FunctiontestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctiontestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctiontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
