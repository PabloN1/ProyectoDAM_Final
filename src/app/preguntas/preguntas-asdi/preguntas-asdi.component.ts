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
  selector: 'app-preguntas-asdi',
  templateUrl: './preguntas-asdi.component.html',
  styleUrls: ['./preguntas-asdi.component.css'],
})
export class PreguntasASDIComponent {
  public questions: any[] = [];
  public indice = 0;
  public puntuacion = 0;
  public puntuacionAnterior: number[] = [];
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private datousuario: DatoUsuarioService,
    private presultado: PresultadoService
  ) {
    this.getData();
    for (let index = 0; index < this.questions.length; index++) {
      this.puntuacionAnterior.push(0);
    }
  }

  // Va a la siguiente pregunta añadiendo la puntuacion escogida
  public siguiente() {
    var r1 = document.getElementById('respuesta1') as HTMLInputElement;
    var r2 = document.getElementById('respuesta2') as HTMLInputElement;
    if (r1.checked) {
      r1.checked = false;
      this.puntuacionAnterior[this.indice] = parseInt(
        this.questions[this.indice].ValorRespuesta[0]
      );
      this.puntuacion += this.puntuacionAnterior[this.indice];
      this.indice++;
    }
    if (r2.checked) {
      r2.checked = false;
      this.puntuacionAnterior[this.indice] = parseInt(
        this.questions[this.indice].ValorRespuesta[1]
      );
      this.puntuacion += this.puntuacionAnterior[this.indice];
      this.indice++;
    }

    if (this.indice == this.questions.length) {
      if (
        (this.puntuacion >= 10 && this.puntuacion < 12) ||
        (this.puntuacion <= 10 && this.puntuacion > 8)
      ) {
        this.presultado.resultado = 'dudosoasdi';
        this.datousuario.resultado = 'dudoso';
      } else if (this.puntuacion > 12) {
        this.presultado.resultado = 'positivoasdi';
        this.datousuario.resultado = 'positivo';
      } else {
        this.presultado.resultado = 'negativoasdi';
        this.datousuario.resultado = 'negativo';
      }
      this.presultado.puntuacion = this.puntuacion;
      this.router.navigate(['resultado']);
    }
  }

  // Va a la pregunta anterior quitando la puntuacion escogida.
  public anterior() {
    this.indice--;
    if (this.indice < 0) {
      this.indice = 0;
    } else {
      this.puntuacion -= this.puntuacionAnterior[this.indice];
    }
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'PreguntasASDI');
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
