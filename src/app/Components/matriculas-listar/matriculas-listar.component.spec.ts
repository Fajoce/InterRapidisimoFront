import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasListarComponent } from './matriculas-listar.component';

describe('MatriculasListarComponent', () => {
  let component: MatriculasListarComponent;
  let fixture: ComponentFixture<MatriculasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
