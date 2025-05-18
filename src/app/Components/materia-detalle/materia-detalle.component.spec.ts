import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDetalleComponent } from './materia-detalle.component';

describe('MateriaDetalleComponent', () => {
  let component: MateriaDetalleComponent;
  let fixture: ComponentFixture<MateriaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
