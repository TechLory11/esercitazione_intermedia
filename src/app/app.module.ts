import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ElencoDrinkComponent } from './elenco-drink/elenco-drink.component';
import { AppRoutingModule } from './app.routing.module';
import { DettaglioDrinkComponent } from './dettaglio-drink/dettaglio-drink.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  
  declarations: [
    AppComponent,
    ElencoDrinkComponent,
    DettaglioDrinkComponent,
  ],
  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }