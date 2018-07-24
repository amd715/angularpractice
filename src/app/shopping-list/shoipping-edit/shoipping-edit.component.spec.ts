import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoippingEditComponent } from './shoipping-edit.component';

describe('ShoippingEditComponent', () => {
  let component: ShoippingEditComponent;
  let fixture: ComponentFixture<ShoippingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoippingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoippingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
