import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Counter1Component} from "./pages/counter1.component";
import {Counter2Component} from "./pages/counter2.component";
import {Counter3Component} from "./pages/counter3.component";
import {Counter4Component} from "./pages/counter4.component";

const routes: Routes = [
  { path: 'counter1', component: Counter1Component },
  { path: 'counter2', component: Counter2Component },
  { path: 'counter3', component: Counter3Component },
  { path: 'counter4', component: Counter4Component },
  { path: '',   redirectTo: '/counter1', pathMatch: 'full' },
  { path: '**', redirectTo: '/counter1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
