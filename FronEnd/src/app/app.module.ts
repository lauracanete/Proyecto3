import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercademiComponent } from './componentes/acercademi/acercademi.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EstadisticasComponent } from './componentes/estadisticas/estadisticas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercademiComponent,
    ExperienciasComponent,
    EstudiosComponent,
    EstadisticasComponent,
    ProyectosComponent,
    PiedepaginaComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
