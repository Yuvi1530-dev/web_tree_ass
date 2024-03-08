import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombaineComponent } from "./_layout/combaine/combaine.component";
const routes: Routes = [
  {
    path:'',
    component :CombaineComponent,
    loadChildren:  () => import('./feature/feature-routing.module').then((m)=>m.FeatureRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
