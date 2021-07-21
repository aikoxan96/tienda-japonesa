import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubiertosComponent } from './cubiertos.component';

describe('CubiertosComponent', () => {
  let component: CubiertosComponent;
  let fixture: ComponentFixture<CubiertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubiertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
