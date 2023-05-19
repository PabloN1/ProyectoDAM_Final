import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore'

@Component({
  selector: 'app-preguntas-ea',
  templateUrl: './preguntas-ea.component.html',
  styleUrls: ['./preguntas-ea.component.css']
})
export class PreguntasEAComponent {
  public questionary:Question[];
  public questions: any[]=[];
  public indice=0
  constructor(private firestore: Firestore){
    this.getData();
    this.questionary=[{id:0,question:'hola',answers:['1','2','3'], values:[0,1,2]}]

  }

  public siguiente(){
    this.indice++
  }

  public anterior(){
    this.indice--
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
