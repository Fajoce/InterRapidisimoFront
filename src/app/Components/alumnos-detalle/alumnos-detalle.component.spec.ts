import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosDetalleComponent } from './alumnos-detalle.component';

describe('AlumnosDetalleComponent', () => {
  let component: AlumnosDetalleComponent;
  let fixture: ComponentFixture<AlumnosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
