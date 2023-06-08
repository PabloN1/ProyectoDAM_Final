import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { DatoUsuarioService } from '../services/dato-usuario.service';
import { Chart, ChartItem, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-lista-asociacion',
  templateUrl: './lista-asociacion.component.html',
  styleUrls: ['./lista-asociacion.component.css'],
})
export class ListaAsociacionComponent {
  public questions: any[] = [];
  public filtrados: any[] = [];
  public provincias: any[] = [];
  public indice = 0;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private route: ActivatedRoute,
    private datoUsuario: DatoUsuarioService
  ) {
    this.getData();
  }

  // Filtra los datos de las asociaciones por provincia indicada
  public Filtrar() {
    var provi = document.getElementById('provincia') as HTMLInputElement;
    this.filtrados = this.questions.filter(
      (asper) => asper.Provincia === provi.value
    );
  }

  // Funcionalidad de boton para mostrar las recomendaciones.
  public Recomendacion() {
    if (this.indice == 0) {
      this.indice++;
      var a = document.getElementById('boton') as HTMLInputElement;
      a.innerHTML = 'Pasos';
    } else {
      if (this.indice == 2) {
        this.indice = 0;
        var a = document.getElementById('boton') as HTMLInputElement;
        a.innerHTML = 'Listado';
      }
    }
  }

  // Boton para mostrar los datos de los usuarios que han realizado el cuestionario
  public estadistica() {
    this.indice = 2;
  }

  // Obtiene los datos de las asociaciones de la base de datos.
  getData() {
    const collectionInstance = collection(this.firestore, 'Asociaciones');
    collectionData(collectionInstance).subscribe((val) => {
      this.questions = val;
      for (let index = 0; index < this.questions.length; index++) {
        this.provincias.push(this.questions[index].Provincia);
      }
      this.provincias = [...new Set(this.provincias)];
      this.provincias.sort();
    });
  }
}
