
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
const appRoutes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' , component: QuotelistComponent},
  { path: '',  component: QuotelistComponent},
  { path: 'app-quotedetail', component: QuotedetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
