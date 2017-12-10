import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleFinanceComponent } from './google-finance.component';

describe('GoogleFinanceComponent', () => {
  let component: GoogleFinanceComponent;
  let fixture: ComponentFixture<GoogleFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
