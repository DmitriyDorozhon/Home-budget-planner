import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddIncomeComponent } from './modal-add-income.component';

describe('ModalAddIncomeComponent', () => {
  let component: ModalAddIncomeComponent;
  let fixture: ComponentFixture<ModalAddIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
