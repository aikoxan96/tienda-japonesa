import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAgregadoComponent } from './usuario-agregado.component';

describe('UsuarioAgregadoComponent', () => {
  let component: UsuarioAgregadoComponent;
  let fixture: ComponentFixture<UsuarioAgregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioAgregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAgregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
