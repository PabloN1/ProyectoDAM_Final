import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoEAComponent } from './resultado-ea.component';

describe('ResultadoEAComponent', () => {
  let component: ResultadoEAComponent;
  let fixture: ComponentFixture<ResultadoEAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadoEAComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoEAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
