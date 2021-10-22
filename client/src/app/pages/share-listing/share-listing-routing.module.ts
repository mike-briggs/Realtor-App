import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareListingComponent } from './share-listing.component';

const routes: Routes = [
  { path: '', component: ShareListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareListingRoutingModule { }
