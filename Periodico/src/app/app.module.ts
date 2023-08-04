import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopOfPageComponent } from './Componentes/top-of-page/top-of-page.component';
import { ContentComponent } from './Componentes/content/content.component';
import { AdvertsComponent } from './Componentes/adverts/adverts.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ArticulsComponent } from './Componentes/articuls/articuls.component';
import { PiedepaginaComponent } from './Componentes/piedepagina/piedepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    TopOfPageComponent,
    ContentComponent,
    AdvertsComponent,
    NuevoComponent,
    ArticulsComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
