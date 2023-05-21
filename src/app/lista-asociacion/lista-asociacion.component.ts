import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { DatoUsuarioService } from '../services/dato-usuario.service';

@Component({
  selector: 'app-lista-asociacion',
  templateUrl: './lista-asociacion.component.html',
  styleUrls: ['./lista-asociacion.component.css']
})
export class ListaAsociacionComponent {
  public questions: any[]=[];
  public indice=0
  constructor(private firestore: Firestore, private router: Router, private route: ActivatedRoute, private datoUsuario: DatoUsuarioService){
    this.getData()
  }

  public siguiente(){
    var genero=document.getElementById("genero") as HTMLInputElement;
    var edad= document.getElementById("edad") as HTMLInputElement;


    this.indice++
    this.datoUsuario.edad=edad.value;
    this.datoUsuario.genero=genero.value;
    if(this.datoUsuario.edad=='Seleccione su edad' || this.datoUsuario.genero=='Seleccione su género'){
      alert("Rellene todos los campos")
    }else{
      this.router.navigate(['/preguntas-ea'])
    }
    
      /*switch(edad.value){
        case '1':
          this.datoUsuario.edad=edad.value;
          this.datoUsuario.genero=genero.value;
          this.router.navigate(['/preguntas-asdi'])
          
          break;
        case '2':
          this.datoUsuario.edad=edad.value;
          this.datoUsuario.genero=genero.value;
          this.router.navigate(['/preguntas-aqa'])
          
          break;
        case '3':
          this.datoUsuario.edad=edad.value;
          this.datoUsuario.genero=genero.value;
          this.router.navigate(['/preguntas-aaa'])
          break;
        default:
          alert("Rellene todos los campos")
          break;
      }*/
  }

  getData(){
    const collectionInstance = collection(this.firestore,'Asociaciones');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val)
      this.questions=val
    })
  }


}

