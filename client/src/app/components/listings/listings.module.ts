import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import {NzIconModule } from 'ng-zorro-antd/icon';
import { ListingsComponent } from './listings.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [CommonModule,RouterModule, NzTableModule, NzDividerModule, NzTagModule, NzToolTipModule, NzIconModule],
  declarations: [ListingsComponent],
  exports: [ListingsComponent]
})
export class ListingsModule { }
