import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresultadoService {

  constructor() { this.conresultado=false; }

  public resultado!:string
  public puntuacion!:any
  public A:any
  public B:any
  public C:any
  public D:any
  public E:any
  public conresultado:boolean
}
