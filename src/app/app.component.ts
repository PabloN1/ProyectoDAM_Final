import { Component } from '@angular/core';
import { Firestore, collection, getDoc,collectionData } from '@angular/fire/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PTea';
  public questions: any[]=[];
  public indice=0
  constructor(private firestore: Firestore){
    
  }

  public siguiente(){
    this.indice++
  }

  getData(){
    const collectionInstance = collection(this.firestore,'PreguntasAAA');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val)
      this.questions=val
    })
  }


}


