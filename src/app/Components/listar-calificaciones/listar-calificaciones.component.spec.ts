import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCalificacionesComponent } from './listar-calificaciones.component';

describe('ListarCalificacionesComponent', () => {
  let component: ListarCalificacionesComponent;
  let fixture: ComponentFixture<ListarCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCalificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
