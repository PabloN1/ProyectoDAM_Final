import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore';
import { ActivatedRoute, Router, } from '@angular/router';
import { DatoUsuarioService } from 'src/app/services/dato-usuario.service';
import { PresultadoService } from 'src/app/services/presultado.service';
@Component({
  selector: 'app-preguntas-aaa',
  templateUrl: './preguntas-aaa.component.html',
  styleUrls: ['./preguntas-aaa.component.css']
})
export class PreguntasAAAComponent {
  public questions: any[]=[];
  public indice=0;
  public puntuacion=0;
  public puntuacionAnterior: number[]=[];
  public puntuacionA=0;
  public puntuacionB=0;
  public puntuacionC=0;
  public puntuacionD=0;
  public puntuacionE=0;
  public dudoso=0;
  constructor(private firestore: Firestore, private router: Router, private route: ActivatedRoute,
    private datousuario: DatoUsuarioService, private presultado: PresultadoService){
    this.getData();
    for (let index = 0; index < this.questions.length; index++) {
      this.puntuacionAnterior.push(0);
    }
  }

  public siguiente(){
    var r1=document.getElementById("respuesta1") as HTMLInputElement;
    var r2=document.getElementById("respuesta2") as HTMLInputElement;
    if(r1.checked){
      r1.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[0]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      this.addPuntos();
    }
    if(r2.checked){
      r2.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[1]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      this.addPuntos();
    }

    
    if(this.indice==this.questions.length){
      console.log("FIN");
      if(this.puntuacion>=15){
        if(this.puntuacionA<3){
          this.dudoso++;
        }
        if(this.puntuacionB<3){
          this.dudoso++;
        }
        if(this.puntuacionC<3){
          this.dudoso++;
        }
        if(this.puntuacionD<3){
          this.dudoso++;
        }
        if(this.puntuacionE<5){
          this.presultado.resultado="negativoaaa"
        }
        if(this.dudoso==0){
          this.presultado.resultado="positivoaaa"
        }else if(this.dudoso<2){
          this.presultado.resultado="dudosoaaa"
        }else{
          this.presultado.resultado="negativoaaa"
        } 
      }else{
        this.presultado.resultado="negativoaaa"
      }
      this.presultado.puntuacion=this.puntuacion;
      this.presultado.A=this.puntuacionA
      this.presultado.B=this.puntuacionB
      this.presultado.C=this.puntuacionC
      this.presultado.D=this.puntuacionD
      this.presultado.E=this.puntuacionE
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
      switch(this.questions[this.indice].Campo){
        case 'A':
          this.puntuacionA-=this.puntuacionAnterior[this.indice];
          break;
        case 'B':
          this.puntuacionB-=this.puntuacionAnterior[this.indice];
          break;
        case 'C':
          this.puntuacionC-=this.puntuacionAnterior[this.indice];
          break;
        case 'D':
          this.puntuacionD-=this.puntuacionAnterior[this.indice];
          break;
        case 'E':
          this.puntuacionE-=this.puntuacionAnterior[this.indice];
          break;
      }
      console.log(this.puntuacion);
      console.log("A: "+this.puntuacionA)
      console.log("B: "+this.puntuacionB)
      console.log("C: "+this.puntuacionC)
      console.log("D: "+this.puntuacionD)
      console.log("E: "+this.puntuacionE)
    }
  }

  public addPuntos(){
    switch(this.questions[this.indice].Campo){
      case 'A':
        this.puntuacionA+=this.puntuacionAnterior[this.indice];
        break;
      case 'B':
        this.puntuacionB+=this.puntuacionAnterior[this.indice];
        break;
      case 'C':
        this.puntuacionC+=this.puntuacionAnterior[this.indice];
        break;
      case 'D':
        this.puntuacionD+=this.puntuacionAnterior[this.indice];
        break;
      case 'E':
        this.puntuacionE+=this.puntuacionAnterior[this.indice];
        break;
    }
    console.log(this.puntuacion)
    console.log("A: "+this.puntuacionA)
    console.log("B: "+this.puntuacionB)
    console.log("C: "+this.puntuacionC)
    console.log("D: "+this.puntuacionD)
    console.log("E: "+this.puntuacionE)
    this.indice++;
    if(this.indice>this.questions.length){
      console.log("superooo")
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

interface Question{
  id:number;
  question:string;
  answers:string[];
  values:number[];
}
