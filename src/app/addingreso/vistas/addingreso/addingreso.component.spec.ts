import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingresoComponent } from './addingreso.component';

describe('AddingresoComponent', () => {
  let component: AddingresoComponent;
  let fixture: ComponentFixture<AddingresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
