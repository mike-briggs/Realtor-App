import { Component, Input } from '@angular/core';

interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}



@Component({
  selector: 'app-listings-tiles',
  templateUrl: './listings-tiles.component.html'
})
export class ListingsTilesComponent {


  @Input() all_listings: Listing[] = [];

  loading = false;

  returnData() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }


}
