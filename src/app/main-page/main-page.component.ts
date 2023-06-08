import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  getDoc,
  collectionData,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DatoUsuarioService } from '../services/dato-usuario.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  title = 'PTea';
  public questions: any[] = [];
  public indice = 0;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private datoUsuario: DatoUsuarioService
  ) {}

  // Avanza a la pantalla de introduccion de datos o va directamente al test EA.
  public siguiente() {
    var genero = document.getElementById('genero') as HTMLInputElement;
    var edad = document.getElementById('edad') as HTMLInputElement;

    this.indice++;
    this.datoUsuario.edad = edad.value;
    this.datoUsuario.genero = genero.value;
    if (
      this.datoUsuario.edad == 'Seleccione su edad' ||
      this.datoUsuario.genero == 'Seleccione su género'
    ) {
      alert('Rellene todos los campos');
    } else {
      this.router.navigate(['/preguntas-ea']);
    }
  }
}
