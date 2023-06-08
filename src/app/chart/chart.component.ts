import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  public questions: any[] = [];
  public filtrados: any[] = [];
  public provincias: any[] = [];
  public indice = 0;
  public myChart: any;

  constructor(private firestore: Firestore) {
    this.getData();
  }

  // Obtiene los datos de la base de datos
  public getData() {
    const collectionInstance = collection(this.firestore, 'Analitica');
    collectionData(collectionInstance).subscribe((val) => {
      this.questions = val;
    });
  }

  // Crea un chart en base a los datos se le dan.
  public createChart(data: number[]) {
    this.myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: [
          'Hombre TEA',
          'Mujer TEA',
          'No Binario TEA',
          'Otro TEA',
          'Hombre sin TEA',
          'Mujer sin TEA',
          'No Binario sin TEA',
          'Otro sin TEA',
        ],
        datasets: [
          {
            label: 'Número de personas respondido',
            data: data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Carga el chart en base a la edad indicada, destruyendo el chart previo.
  public filtrar() {
    var edad = document.getElementById('edad') as HTMLInputElement;
    var hombreP = 0;
    var mujerP = 0;
    var binarioP = 0;
    var otroP = 0;
    var hombreN = 0;
    var mujerN = 0;
    var binarioN = 0;
    var otroN = 0;
    switch (edad.value) {
      case '1':
        for (let index = 0; index < this.questions.length; index++) {
          if (this.questions[index].Edad === '1') {
            switch (this.questions[index].Genero) {
              case 'hombre':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  hombreP++;
                } else {
                  hombreN++;
                }
                break;
              case 'mujer':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  mujerP++;
                } else {
                  mujerN++;
                }
                break;
              case 'binario':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  binarioP++;
                } else {
                  binarioN++;
                }
                break;
              case 'otro':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  otroP++;
                } else {
                  otroN++;
                }
                break;
              default:
                break;
            }
          }
        }
        break;
      case '2':
        for (let index = 0; index < this.questions.length; index++) {
          if (this.questions[index].Edad === '2') {
            switch (this.questions[index].Genero) {
              case 'hombre':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  hombreP++;
                } else {
                  hombreN++;
                }
                break;
              case 'mujer':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  mujerP++;
                } else {
                  mujerN++;
                }
                break;
              case 'binario':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  binarioP++;
                } else {
                  binarioN++;
                }
                break;
              case 'otro':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  otroP++;
                } else {
                  otroN++;
                }
                break;
              default:
                break;
            }
          }
        }
        break;
      case '3':
        for (let index = 0; index < this.questions.length; index++) {
          if (this.questions[index].Edad === '3') {
            switch (this.questions[index].Genero) {
              case 'hombre':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  hombreP++;
                } else {
                  hombreN++;
                }
                break;
              case 'mujer':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  mujerP++;
                } else {
                  mujerN++;
                }
                break;
              case 'binario':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  binarioP++;
                } else {
                  binarioN++;
                }
                break;
              case 'otro':
                if (
                  this.questions[index].Resultado === 'positivo' ||
                  this.questions[index].ResultadoEA === 'positivo'
                ) {
                  otroP++;
                } else {
                  otroN++;
                }
                break;
              default:
                break;
            }
          }
        }
        break;
      default:
        break;
    }
    this.myChart.destroy();
    this.createChart([
      hombreP,
      mujerP,
      binarioP,
      otroP,
      hombreN,
      mujerN,
      binarioN,
      otroN,
    ]);
  }

  ngOnInit(): void {
    this.createChart([]);
  }
}
