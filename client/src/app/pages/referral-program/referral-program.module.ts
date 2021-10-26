import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { ReferralProgramRoutingModule } from './referral-program-routing.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { ReferralProgramComponent } from './referral-program.component';
import { ListingsModule } from '../../components/listings/listings.module';
import { ListingsTilesModule } from '../../components/listings-tiles/listings-tiles.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'

@NgModule({
  imports: [ReferralProgramRoutingModule,
    FormsModule,
    CommonModule,
    ListingsModule,
    ListingsTilesModule,
    NzTypographyModule,
    NzButtonModule,
    NzDividerModule,
    NzDropDownModule,
    NzNotificationModule,
    NzProgressModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzToolTipModule,
    NgxQRCodeModule
  ],
  declarations: [ReferralProgramComponent],
  exports: [ReferralProgramComponent]
})
export class ReferralProgramModule { }
