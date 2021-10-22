import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';


import { ListingRoutingModule } from './listing-routing.module';
import { ListingComponent } from './listing.component';
import { ListingsModule } from '../../components/listings/listings.module';
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';


@NgModule({
  imports: [ListingRoutingModule, CommonModule, NzTypographyModule,ListingsModule,NzDropDownModule, ListingsTilesModule, NzIconModule,NzDividerModule, NzToolTipModule,NzButtonModule],
  declarations: [ListingComponent],
  exports: [ListingComponent]
})
export class ListingModule { }
