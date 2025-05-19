import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCalificacionesComponent } from './crear-calificaciones.component';

describe('CrearCalificacionesComponent', () => {
  let component: CrearCalificacionesComponent;
  let fixture: ComponentFixture<CrearCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCalificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
