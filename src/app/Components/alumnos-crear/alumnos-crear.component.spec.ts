import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosCrearComponent } from './alumnos-crear.component';

describe('AlumnosCrearComponent', () => {
  let component: AlumnosCrearComponent;
  let fixture: ComponentFixture<AlumnosCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
