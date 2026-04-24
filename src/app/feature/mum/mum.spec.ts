import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUM } from './mum';

describe('MUM', () => {
  let component: MUM;
  let fixture: ComponentFixture<MUM>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MUM]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MUM);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
