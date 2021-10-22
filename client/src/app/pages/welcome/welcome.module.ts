import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ListingsModule } from '../../components/listings/listings.module'
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';

@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, ListingsModule,ListingsTilesModule, NzIconModule, NzToolTipModule, NzDividerModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
