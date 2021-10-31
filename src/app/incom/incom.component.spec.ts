import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomComponent } from './incom.component';

describe('IncomComponent', () => {
  let component: IncomComponent;
  let fixture: ComponentFixture<IncomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
