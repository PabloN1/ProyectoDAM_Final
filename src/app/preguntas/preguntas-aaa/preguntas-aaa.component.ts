import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  getDoc,
  collectionData,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { DatoUsuarioService } from 'src/app/services/dato-usuario.service';
import { PresultadoService } from 'src/app/services/presultado.service';
@Component({
  selector: 'app-preguntas-aaa',
  templateUrl: './preguntas-aaa.component.html',
  styleUrls: ['./preguntas-aaa.component.css'],
})
export class PreguntasAAAComponent {
  public questions: any[] = [];
  public indice = 0;
  public puntuacion = 0;
  public puntuacionAnterior: number[] = [];
  public puntuacionA = 0;
  public puntuacionB = 0;
  public puntuacionC = 0;
  public puntuacionD = 0;
  public puntuacionE = 0;
  public dudoso = 0;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private datoUsuario: DatoUsuarioService,
    private presultado: PresultadoService
  ) {
    this.getData();
    for (let index = 0; index < this.questions.length; index++) {
      this.puntuacionAnterior.push(0);
    }
  }

  // Va a la siguiente pregunta almacenando el resultado escogido
  public siguiente() {
    var r1 = document.getElementById('respuesta1') as HTMLInputElement;
    var r2 = document.getElementById('respuesta2') as HTMLInputElement;
    if (r1.checked) {
      r1.checked = false;
      this.puntuacionAnterior[this.indice] = parseInt(
        this.questions[this.indice].ValorRespuesta[0]
      );
      this.puntuacion += this.puntuacionAnterior[this.indice];
      this.addPuntos();
    }
    if (r2.checked) {
      r2.checked = false;
      this.puntuacionAnterior[this.indice] = parseInt(
        this.questions[this.indice].ValorRespuesta[1]
      );
      this.puntuacion += this.puntuacionAnterior[this.indice];
      this.addPuntos();
    }

    if (this.indice == this.questions.length) {
      if (this.puntuacion >= 15) {
        if (this.puntuacionA < 3) {
          this.dudoso++;
        }
        if (this.puntuacionB < 3) {
          this.dudoso++;
        }
        if (this.puntuacionC < 3) {
          this.dudoso++;
        }
        if (this.puntuacionD < 3) {
          this.dudoso++;
        }
        if (this.puntuacionE < 5) {
          this.presultado.resultado = 'negativoaaa';
          this.datoUsuario.resultado = 'negativo';
        }
        if (this.dudoso == 0) {
          this.presultado.resultado = 'positivoaaa';
          this.datoUsuario.resultado = 'positivo';
        } else if (this.dudoso < 2) {
          this.presultado.resultado = 'dudosoaaa';
          this.datoUsuario.resultado = 'dudoso';
        } else {
          this.presultado.resultado = 'negativoaaa';
          this.datoUsuario.resultado = 'negativo';
        }
      } else {
        this.presultado.resultado = 'negativoaaa';
        this.datoUsuario.resultado = 'negativo';
      }
      this.presultado.puntuacion = this.puntuacion;
      this.presultado.A = this.puntuacionA;
      this.presultado.B = this.puntuacionB;
      this.presultado.C = this.puntuacionC;
      this.presultado.D = this.puntuacionD;
      this.presultado.E = this.puntuacionE;
      this.router.navigate(['resultado']);
    }
  }

  // Va a la pregunta anterior quitando el resultado escogido anteriormente.
  public anterior() {
    this.indice--;
    if (this.indice < 0) {
      this.indice = 0;
    } else {
      this.puntuacion -= this.puntuacionAnterior[this.indice];
      switch (this.questions[this.indice].Campo) {
        case 'A':
          this.puntuacionA -= this.puntuacionAnterior[this.indice];
          break;
        case 'B':
          this.puntuacionB -= this.puntuacionAnterior[this.indice];
          break;
        case 'C':
          this.puntuacionC -= this.puntuacionAnterior[this.indice];
          break;
        case 'D':
          this.puntuacionD -= this.puntuacionAnterior[this.indice];
          break;
        case 'E':
          this.puntuacionE -= this.puntuacionAnterior[this.indice];
          break;
      }
    }
  }

  // Suma los puntos de cada categoría en base al campo al que pertenezca la pregunta.
  public addPuntos() {
    switch (this.questions[this.indice].Campo) {
      case 'A':
        this.puntuacionA += this.puntuacionAnterior[this.indice];
        break;
      case 'B':
        this.puntuacionB += this.puntuacionAnterior[this.indice];
        break;
      case 'C':
        this.puntuacionC += this.puntuacionAnterior[this.indice];
        break;
      case 'D':
        this.puntuacionD += this.puntuacionAnterior[this.indice];
        break;
      case 'E':
        this.puntuacionE += this.puntuacionAnterior[this.indice];
        break;
    }
    this.indice++;
    if (this.indice > this.questions.length) {
    }
  }
  // Obtiene los datos de la base de datos.
  getData() {
    const collectionInstance = collection(this.firestore, 'PreguntasAAA');
    collectionData(collectionInstance).subscribe((val) => {
      this.questions = val;
    });
  }
}

interface Question {
  id: number;
  question: string;
  answers: string[];
  values: number[];
}
