import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCrearComponent } from './materias-crear.component';

describe('MateriasCrearComponent', () => {
  let component: MateriasCrearComponent;
  let fixture: ComponentFixture<MateriasCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriasCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
