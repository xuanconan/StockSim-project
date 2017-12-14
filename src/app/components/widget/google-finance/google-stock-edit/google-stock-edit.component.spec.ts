import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleStockEditComponent } from './google-stock-edit.component';

describe('GoogleStockEditComponent', () => {
  let component: GoogleStockEditComponent;
  let fixture: ComponentFixture<GoogleStockEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleStockEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleStockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
