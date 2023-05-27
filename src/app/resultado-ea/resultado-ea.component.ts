import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PresultadoService } from '../services/presultado.service';
import { DatoUsuarioService } from '../services/dato-usuario.service';

@Component({
  selector: 'app-resultado-ea',
  templateUrl: './resultado-ea.component.html',
  styleUrls: ['./resultado-ea.component.css']
})
export class ResultadoEAComponent {
  public resultado:String;
  public puntuacion:any;
  public edad:any;
  public genero:any;
  constructor(private router: Router, private route: ActivatedRoute,
    private presultado: PresultadoService, private datoUsuario: DatoUsuarioService){
    this.resultado=this.presultado.resultado;
    this.puntuacion=this.presultado.puntuacion;
    this.edad=this.datoUsuario.edad;
    this.genero=this.datoUsuario.genero;
    if(this.edad===undefined || this.genero===undefined){
      this.router.navigate(['/'])
    }
  }

  tests(){
    switch(this.edad){
      case '1':
        this.datoUsuario.edad=this.edad.value;
        this.datoUsuario.genero=this.genero.value;
        this.router.navigate(['/preguntas-asdi'])
        
        break;
      case '2':
        this.datoUsuario.edad=this.edad.value;
        this.datoUsuario.genero=this.genero.value;
        this.router.navigate(['/preguntas-aqa'])
        
        break;
      case '3':
        this.datoUsuario.edad=this.edad.value;
        this.datoUsuario.genero=this.genero.value;
        this.router.navigate(['/preguntas-aaa'])
        break;
    }
  }

  contactos(){
    this.router.navigate(['/lista-asociacion'])
  }
}
