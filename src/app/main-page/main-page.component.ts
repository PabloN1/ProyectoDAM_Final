import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore'
import { ActivatedRoute, Router, } from '@angular/router';
import { DatoUsuarioService } from '../services/dato-usuario.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  title = 'PTea';
  public questions: any[]=[];
  public indice=0
  constructor(private firestore: Firestore, private router: Router, private route: ActivatedRoute, private datoUsuario: DatoUsuarioService){
    
  }

  public siguiente(){
    var genero=document.getElementById("genero") as HTMLInputElement;
    var edad= document.getElementById("edad") as HTMLInputElement;


    this.indice++
      switch(edad.value){
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
      }
  }

  getData(){
    const collectionInstance = collection(this.firestore,'PreguntasAAA');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val)
      this.questions=val
    })
  }


}
