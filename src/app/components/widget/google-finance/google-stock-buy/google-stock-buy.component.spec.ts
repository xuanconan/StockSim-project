import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleStockBuyComponent } from './google-stock-buy.component';

describe('GoogleStockBuyComponent', () => {
  let component: GoogleStockBuyComponent;
  let fixture: ComponentFixture<GoogleStockBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleStockBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleStockBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
