import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesListarComponent } from './docentes-listar.component';

describe('DocentesListarComponent', () => {
  let component: DocentesListarComponent;
  let fixture: ComponentFixture<DocentesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
