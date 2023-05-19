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

  constructor(private router: Router, private route: ActivatedRoute,
     private presultado: PresultadoService){
     this.resultado=this.presultado.resultado
     console.log(this.resultado)
  }
}
