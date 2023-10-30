import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElencoDrinkComponent } from './elenco-drink/elenco-drink.component';
import { DettaglioDrinkComponent } from './dettaglio-drink/dettaglio-drink.component';

const routes: Routes = [
  { path: 'elenco', component: ElencoDrinkComponent },
  { path: '', redirectTo: '/elenco', pathMatch: 'full' },
  { path: 'elenco/dettaglio/:id', component: DettaglioDrinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}