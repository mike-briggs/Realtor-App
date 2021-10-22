import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


import { ShareListingRoutingModule } from './share-listing-routing.module';

import { ShareListingComponent } from './share-listing.component';
import { ListingsComponent } from '../../components/listings/listings.component';
import { ListingsModule } from '../../components/listings/listings.module';
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'

@NgModule({
  imports: [ShareListingRoutingModule, 
            FormsModule,
            CommonModule, 
            ListingsModule, 
            ListingsTilesModule,
            NzButtonModule,
            NzDropDownModule,
            NzNotificationModule,
            NzFormModule,
            NzIconModule, 
            NzInputModule,
            NzToolTipModule,
            NgxQRCodeModule
          ],
  declarations: [ShareListingComponent],
  exports: [ShareListingComponent]
})
export class ShareListingModule { }
