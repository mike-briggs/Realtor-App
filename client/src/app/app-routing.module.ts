import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/view-listings' },
  { path: 'view-listings', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'add-listing', loadChildren: () => import('./pages/add-listing/add-listing.module').then(m => m.AddListingModule) },
  { path: 'share-listing/:id', loadChildren: () => import('./pages/share-listing/share-listing.module').then(m => m.ShareListingModule) },
  { path: 'referral-program', loadChildren: () => import('./pages/referral-program/referral-program.module').then(m => m.ReferralProgramModule) },
  { path: 'listing/:id', loadChildren: () => import('./pages/listing/listing.module').then(m => m.ListingModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
