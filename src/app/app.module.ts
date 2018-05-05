import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { HttpModule } from '@angular/http';
import { RouterModule,Route,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { QuizzComponent } from './componentes/quizz/quizz.component';
import { PuntajesComponent } from './componentes/puntajes/puntajes.component';

const config: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"ppt",
    component: PiedraPapelTijeraComponent
  },
  {
    path: "anagrama",
    component: AnagramaComponent
  },
  {
    path: "quizz",
    component: QuizzComponent
  },
  {
    path: "puntajes",
    component: PuntajesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PiedraPapelTijeraComponent,
    PrincipalComponent,
    MenuComponent,
    HomeComponent,
    AnagramaComponent,
    QuizzComponent,
    PuntajesComponent,
    
  ],
  imports: [
    BrowserModule,
    SplitButtonModule,
    ButtonModule,
    HttpModule,
    RouterModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
