import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleStockNewsComponent } from './google-stock-news.component';

describe('GoogleStockNewsComponent', () => {
  let component: GoogleStockNewsComponent;
  let fixture: ComponentFixture<GoogleStockNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleStockNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleStockNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
