import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyPopupComponent } from './giphy-popup.component';

describe('GiphyPopupComponent', () => {
  let component: GiphyPopupComponent;
  let fixture: ComponentFixture<GiphyPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
