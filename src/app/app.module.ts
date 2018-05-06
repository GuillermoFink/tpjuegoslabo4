import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { PrimengModule } from './modulos/primeng/primeng.module';
import { HttpModule } from '@angular/http';
import { RouterModule,Route,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { QuizzComponent } from './componentes/quizz/quizz.component';
import { PuntajesComponent } from './componentes/puntajes/puntajes.component';
import { LoginComponent } from './componentes/login/login.component';

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
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
