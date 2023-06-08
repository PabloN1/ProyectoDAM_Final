import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsociacionComponent } from './lista-asociacion.component';

describe('ListaAsociacionComponent', () => {
  let component: ListaAsociacionComponent;
  let fixture: ComponentFixture<ListaAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAsociacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAsociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
