import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaEditarComponent } from './materia-editar.component';

describe('MateriaEditarComponent', () => {
  let component: MateriaEditarComponent;
  let fixture: ComponentFixture<MateriaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
