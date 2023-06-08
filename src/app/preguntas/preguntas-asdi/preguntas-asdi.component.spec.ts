import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasASDIComponent } from './preguntas-asdi.component';

describe('PreguntasASDIComponent', () => {
  let component: PreguntasASDIComponent;
  let fixture: ComponentFixture<PreguntasASDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasASDIComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasASDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
