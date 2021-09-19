import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtratoComponent } from 'src/app/extrato/extrato.component';
import { NovaTranfenciaComponent } from 'src/app/nova-tranfencia/nova-tranfencia.component';

const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTranfenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
