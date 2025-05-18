import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListarComponent } from './alumnos-listar.component';

describe('AlumnosListarComponent', () => {
  let component: AlumnosListarComponent;
  let fixture: ComponentFixture<AlumnosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
