import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import {NzIconModule } from 'ng-zorro-antd/icon';
import { ListingsTilesComponent } from './listings-tiles.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule,CommonModule, NzTableModule, NzDividerModule,NzCardModule, NzSkeletonModule, NzTagModule, NzToolTipModule, NzIconModule],
  declarations: [ListingsTilesComponent],
  exports: [ListingsTilesComponent]
})
export class ListingsTilesModule { }
