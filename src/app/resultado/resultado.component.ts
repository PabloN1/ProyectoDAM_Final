import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresultadoService } from '../services/presultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
public resultado:String;
public puntuacion:any;
public a:any;
public b:any;
public c:any;
public d:any;
public e:any;
  constructor(private router: Router, private route: ActivatedRoute,
     private presultado: PresultadoService){
     this.resultado=this.presultado.resultado
     this.puntuacion=this.presultado.puntuacion
     console.log(this.resultado)
     this.a=this.presultado.A
     this.b=this.presultado.B
     this.c=this.presultado.C
     this.d=this.presultado.D
     this.e=this.presultado.E
  }
}
