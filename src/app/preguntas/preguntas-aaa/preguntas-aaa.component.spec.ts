import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasAAAComponent } from './preguntas-aaa.component';

describe('PreguntasAAAComponent', () => {
  let component: PreguntasAAAComponent;
  let fixture: ComponentFixture<PreguntasAAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntasAAAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasAAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
