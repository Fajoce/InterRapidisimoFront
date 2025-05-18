import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesCrearComponent } from './docentes-crear.component';

describe('DocentesCrearComponent', () => {
  let component: DocentesCrearComponent;
  let fixture: ComponentFixture<DocentesCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
