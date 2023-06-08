import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresultadoService } from '../services/presultado.service';
import { DatoUsuarioService } from '../services/dato-usuario.service';
import {
  Firestore,
  collection,
  getDoc,
  collectionData,
  addDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  public resultado: String;
  public puntuacion: any;
  public a: any;
  public b: any;
  public c: any;
  public d: any;
  public e: any;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private presultado: PresultadoService,
    private datoUsuario: DatoUsuarioService
  ) {
    this.resultado = this.presultado.resultado;
    this.puntuacion = this.presultado.puntuacion;
    const data = {
      Edad: this.datoUsuario.edad,
      Genero: this.datoUsuario.genero,
      Resultado: this.datoUsuario.resultado,
      ResultadoEA: this.datoUsuario.resultadoEA,
    };
    this.addData(data);
    this.a = this.presultado.A;
    this.b = this.presultado.B;
    this.c = this.presultado.C;
    this.d = this.presultado.D;
    this.e = this.presultado.E;
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

  public lista() {
    this.router.navigate(['./lista-asociacion']);
  }
}
