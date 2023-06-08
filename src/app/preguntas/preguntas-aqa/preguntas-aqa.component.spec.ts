import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasAQAComponent } from './preguntas-aqa.component';

describe('PreguntasAQAComponent', () => {
  let component: PreguntasAQAComponent;
  let fixture: ComponentFixture<PreguntasAQAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasAQAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasAQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
