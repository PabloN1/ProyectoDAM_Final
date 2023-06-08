import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore'
import { ActivatedRoute, Router } from '@angular/router';
import { DatoUsuarioService } from 'src/app/services/dato-usuario.service';
import { PresultadoService } from 'src/app/services/presultado.service';

@Component({
  selector: 'app-preguntas-ea',
  templateUrl: './preguntas-ea.component.html',
  styleUrls: ['./preguntas-ea.component.css']
})
export class PreguntasEAComponent {
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
    if(datousuario.genero===undefined || datousuario.edad===undefined){
      this.router.navigate(['/'])
    }
    console.log(this.datousuario.genero)
    console.log(this.datousuario.edad)
  }

  public siguiente(){
    var r1=document.getElementById("respuesta1") as HTMLInputElement;
    var r2=document.getElementById("respuesta2") as HTMLInputElement;
    var r3=document.getElementById("respuesta3") as HTMLInputElement;
    var r4=document.getElementById("respuesta4") as HTMLInputElement;
    var r5=document.getElementById("respuesta5") as HTMLInputElement;
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

    if(r5.checked){
      r5.checked=false;
      this.puntuacionAnterior[this.indice]=parseInt(this.questions[this.indice].ValorRespuesta[4]);
      this.puntuacion+=this.puntuacionAnterior[this.indice];
      console.log(this.puntuacion)
      this.indice++;
    if(this.indice>this.questions.length){
      console.log("superooo")
    }
    }

    if(this.indice==this.questions.length){
      console.log("FIN");
      let contador=0;
      let sumtotal=0;
      for (let index = 0; index < this.puntuacionAnterior.length; index++) {
        if(this.puntuacionAnterior[index]==0){
          contador++;
        }else{
          sumtotal+=this.puntuacionAnterior[index];
        }
      }
      console.log(sumtotal)
      if(contador>=2){
        sumtotal=sumtotal/(this.puntuacionAnterior.length-contador);
        if(sumtotal>=1.5 && sumtotal<=2.5){
          this.presultado.resultado="dudoso"
          this.datousuario.resultadoEA="dudoso"
        }else if(sumtotal>2.5){
          this.presultado.resultado="positivo"
          this.datousuario.resultadoEA="positivo"
        }else{
          this.presultado.resultado="negativo"
          this.datousuario.resultadoEA="negativo"
        }
        this.presultado.puntuacion=sumtotal
      }else{
        if((this.puntuacion>=36 && this.puntuacion<38) || (this.puntuacion<=36 && this.puntuacion>34)){
          this.presultado.resultado="dudoso"
          this.datousuario.resultadoEA="dudoso"
        }else if(this.puntuacion>=38){
          this.presultado.resultado="positivo"
          this.datousuario.resultadoEA="positivo"
        }else{
          this.presultado.resultado="negativo"
          this.datousuario.resultadoEA="negativo"
        }
        this.presultado.puntuacion=this.puntuacion
      }
      
      this.router.navigate(['resultado-ea'])
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
    const collectionInstance = collection(this.firestore,'PreguntasEA');
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