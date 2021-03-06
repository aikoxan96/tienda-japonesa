import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuchesComponent } from './chuches.component';

describe('ChuchesComponent', () => {
  let component: ChuchesComponent;
  let fixture: ComponentFixture<ChuchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
