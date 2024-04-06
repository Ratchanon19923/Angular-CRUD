import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListStoreComponent } from './show-list-store.component';

describe('ShowListStoreComponent', () => {
  let component: ShowListStoreComponent;
  let fixture: ComponentFixture<ShowListStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowListStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowListStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
