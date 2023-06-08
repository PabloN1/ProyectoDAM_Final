import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasEAComponent } from './preguntas-ea.component';

describe('PreguntasEAComponent', () => {
  let component: PreguntasEAComponent;
  let fixture: ComponentFixture<PreguntasEAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasEAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
