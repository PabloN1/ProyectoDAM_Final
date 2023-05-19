import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore'
import { ActivatedRoute, Router } from '@angular/router';
import { DatoUsuarioService } from 'src/app/services/dato-usuario.service';
import { PresultadoService } from 'src/app/services/presultado.service';

@Component({
  selector: 'app-preguntas-aqa',
  templateUrl: './preguntas-aqa.component.html',
  styleUrls: ['./preguntas-aqa.component.css']
})
export class PreguntasAQAComponent {
  public questions: any[]=[];
  public indice=0;
  public puntuacion=0;
  public puntuacionAnterior: number[]=[];
  constructor(private firestore: Firestore, private router: Router, private route: ActivatedRoute, 
    private datousuario: DatoUsuarioService, private presultado: PresultadoService){
    this.getData();
    for (let index = 0; index < this.questions.length; index++) {
      this.puntuacionAnterior.push(0);
    }
    console.log(datousuario.genero)
  }

  public siguiente(){
    var r1=document.getElementById("respuesta1") as HTMLInputElement;
    var r2=document.getElementById("respuesta2") as HTMLInputElement;
    var r3=document.getElementById("respuesta3") as HTMLInputElement;
    var r4=document.getElementById("respuesta4") as HTMLInputElement;
    if(r1.checked){
      r1.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[0]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion)
      this.indice++;
      if(this.indice>this.questions.length){
        console.log("superooo")
      }
    }
    if(r2.checked){
      r2.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[1]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion)
      this.indice++;
    if(this.indice>this.questions.length){
      console.log("superooo")
    }
    }

    if(r3.checked){
      r3.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[2]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion)
      this.indice++;
    if(this.indice>this.questions.length){
      console.log("superooo")
    }
    }

    if(r4.checked){
      r4.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[3]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion)
      this.indice++;
    if(this.indice>this.questions.length){
      console.log("superooo")
    }
    }

    if(this.indice==this.questions.length){
      console.log("FIN");
      if(this.puntuacion>=30){
        this.presultado.resultado="positivo"
      }else{
        this.presultado.resultado="negativo"
      }
      this.router.navigate(['resultado'])
    }
  }

  public anterior(){
    this.indice--;
    if(this.indice<0){
      this.indice=0
    }else{
      console.log("valor anterior: "+this.puntuacionAnterior[this.indice])
      this.puntuacion-=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion);
    }
    
    
  }

  getData(){
    const collectionInstance = collection(this.firestore,'PreguntasAQA');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val)
      this.questions=val
    })
  }
}

interface Question{
  id:number;
  question:string;
  answers:string[];
  values:number[];
}

