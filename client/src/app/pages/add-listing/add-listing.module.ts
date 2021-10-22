import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AddListingRoutingModule } from './add-listing-routing.module';

import { AddListingComponent } from './add-listing.component';
import { ListingsComponent } from '../../components/listings/listings.component';
import { ListingsModule } from '../../components/listings/listings.module';
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';


@NgModule({
  imports: [AddListingRoutingModule, CommonModule, ListingsModule, ListingsTilesModule, NzIconModule, NzToolTipModule],
  declarations: [AddListingComponent],
  exports: [AddListingComponent]
})
export class AddListingModule { }
