import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesDetalleComponent } from './docentes-detalle.component';

describe('DocentesDetalleComponent', () => {
  let component: DocentesDetalleComponent;
  let fixture: ComponentFixture<DocentesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
