import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PreguntasAAAComponent } from './preguntas/preguntas-aaa/preguntas-aaa.component';
import { PreguntasASDIComponent } from './preguntas/preguntas-asdi/preguntas-asdi.component';
import { PreguntasAQAComponent } from './preguntas/preguntas-aqa/preguntas-aqa.component';
import { PreguntasEAComponent } from './preguntas/preguntas-ea/preguntas-ea.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultadoComponent } from './resultado/resultado.component'

const routes: Routes = []
@NgModule({
  
  declarations: [
    AppComponent,
    PreguntasAAAComponent,
    PreguntasASDIComponent,
    PreguntasAQAComponent,
    PreguntasEAComponent,
    MainPageComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
