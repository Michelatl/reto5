import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopOfPageComponent } from './Componentes/top-of-page/top-of-page.component';
import { ContentComponent } from './Componentes/content/content.component';
import { AdvertsComponent } from './Componentes/adverts/adverts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopOfPageComponent,
    ContentComponent,
    AdvertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
