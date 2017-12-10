import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleHistoricalComponent } from './google-historical.component';

describe('GoogleHistoricalComponent', () => {
  let component: GoogleHistoricalComponent;
  let fixture: ComponentFixture<GoogleHistoricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleHistoricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleHistoricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
