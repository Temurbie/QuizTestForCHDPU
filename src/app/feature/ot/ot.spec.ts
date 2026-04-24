import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OT } from './ot';

describe('OT', () => {
  let component: OT;
  let fixture: ComponentFixture<OT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OT]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OT);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
