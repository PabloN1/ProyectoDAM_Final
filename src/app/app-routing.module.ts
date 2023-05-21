import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PreguntasAAAComponent } from './preguntas/preguntas-aaa/preguntas-aaa.component';
import { PreguntasAQAComponent } from './preguntas/preguntas-aqa/preguntas-aqa.component';
import { PreguntasASDIComponent } from './preguntas/preguntas-asdi/preguntas-asdi.component';
import { PreguntasEAComponent } from './preguntas/preguntas-ea/preguntas-ea.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { ResultadoEAComponent } from './resultado-ea/resultado-ea.component';
import { ListaAsociacionComponent } from './lista-asociacion/lista-asociacion.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'preguntas-aaa', component: PreguntasAAAComponent},
  { path: 'preguntas-aqa', component: PreguntasAQAComponent},
  { path: 'preguntas-asdi', component: PreguntasASDIComponent},
  { path: 'preguntas-ea', component: PreguntasEAComponent},
  { path: 'resultado', component: ResultadoComponent},
  { path: 'resultado-ea', component: ResultadoEAComponent},
  { path: 'lista-asociacion', component: ListaAsociacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
