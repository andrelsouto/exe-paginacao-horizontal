import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'vagas', loadChildren: () => import('./vagas/vagas.module').then(mod => mod.VagasModule) },
  { path: '', redirectTo: 'vagas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
