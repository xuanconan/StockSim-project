import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleStockListComponent } from './google-stock-list.component';

describe('GoogleStockListComponent', () => {
  let component: GoogleStockListComponent;
  let fixture: ComponentFixture<GoogleStockListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleStockListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleStockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
