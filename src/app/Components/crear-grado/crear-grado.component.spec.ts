import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGradoComponent } from './crear-grado.component';

describe('CrearGradoComponent', () => {
  let component: CrearGradoComponent;
  let fixture: ComponentFixture<CrearGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearGradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
