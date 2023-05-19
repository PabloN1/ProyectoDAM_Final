import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoUsuarioService {

  constructor() { }

  public edad!: string;
  public genero!: string;
}
