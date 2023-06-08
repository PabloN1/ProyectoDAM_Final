import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresultadoService } from '../services/presultado.service';
import { DatoUsuarioService } from '../services/dato-usuario.service';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-resultado-ea',
  templateUrl: './resultado-ea.component.html',
  styleUrls: ['./resultado-ea.component.css'],
})
export class ResultadoEAComponent {
  public resultado: String;
  public puntuacion: any;
  public edad: any;
  public genero: any;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private presultado: PresultadoService,
    private datoUsuario: DatoUsuarioService
  ) {
    this.resultado = this.presultado.resultado;
    this.puntuacion = this.presultado.puntuacion;
    this.edad = this.datoUsuario.edad;
    this.genero = this.datoUsuario.genero;
    if (this.edad === undefined || this.genero === undefined) {
      this.router.navigate(['/']);
    }
  }

  tests() {
    switch (this.edad) {
      case '1':
        this.router.navigate(['/preguntas-asdi']);

        break;
      case '2':
        this.router.navigate(['/preguntas-aqa']);

        break;
      case '3':
        this.router.navigate(['/preguntas-aaa']);
        break;
    }
  }

  public addData(data: any) {
    const collectionInstance = collection(this.firestore, 'Analitica');
    addDoc(collectionInstance, data)
      .then(() => {
        console.log('Se ha subido');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  contactos() {
    const data = {
      Edad: this.datoUsuario.edad,
      Genero: this.datoUsuario.genero,
      Resultado: '',
      ResultadoEA: this.datoUsuario.resultadoEA,
    };
    this.addData(data);
    this.router.navigate(['/lista-asociacion']);
  }
}
