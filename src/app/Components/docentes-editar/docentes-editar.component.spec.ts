import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesEditarComponent } from './docentes-editar.component';

describe('DocentesEditarComponent', () => {
  let component: DocentesEditarComponent;
  let fixture: ComponentFixture<DocentesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
