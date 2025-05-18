import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasDetalleComponent } from './matriculas-detalle.component';

describe('MatriculasDetalleComponent', () => {
  let component: MatriculasDetalleComponent;
  let fixture: ComponentFixture<MatriculasDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
