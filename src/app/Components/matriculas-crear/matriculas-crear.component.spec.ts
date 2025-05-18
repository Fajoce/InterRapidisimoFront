import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasCrearComponent } from './matriculas-crear.component';

describe('MatriculasCrearComponent', () => {
  let component: MatriculasCrearComponent;
  let fixture: ComponentFixture<MatriculasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
