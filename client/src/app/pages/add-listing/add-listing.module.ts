import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { AddListingRoutingModule } from './add-listing-routing.module';

import { AddListingComponent } from './add-listing.component';
import { ListingsModule } from '../../components/listings/listings.module';
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';


@NgModule({
  imports: [AddListingRoutingModule, CommonModule, FormsModule, NzInputModule, NzUploadModule, NzModalModule, NzDividerModule, NzButtonModule, NzDropDownModule, ListingsModule, ListingsTilesModule, NzIconModule, NzToolTipModule, NzFormModule],
  declarations: [AddListingComponent],
  exports: [AddListingComponent]
})
export class AddListingModule { }
