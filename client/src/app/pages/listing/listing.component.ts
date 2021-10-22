import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsComponent } from '../../components/listings/listings.component';

interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  id = 0;

  all_listings: Listing[] = [
    {
      _id: '1304',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property1.jpg'
    },
    {
      _id: '2122',
      address: '5 Bellevue Cres York ON M9N 1G5',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property2.jpg'
    },
    {
      _id: '3102',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property3.jpg'
    },
    {
      _id: '4234',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property4.jpg'
    },
    {
      _id: '5234',
      address: '5 Bellevue Cres York ON M9N 1G5',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property5.jpg'
    },
    {
      _id: '6234',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property6.jpg'
    },
    {
      _id: '7234',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property7.jpg'
    },
    {
      _id: '8231',
      address: '5 Bellevue Cres York ON M9N 1G5',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property8.jpg'
    },
    {
      _id: '92342',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property9.jpg'
    },
    {
      _id: '10234',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property12.jpg'
    },
  ];

  

  public selected_listing:any;
  public title: string = '';
  public index:number = 0;

  setSelectedListing(_id: string){
    this.selected_listing = this.getKeyByValue(this.all_listings, _id);
    //this.selected_listing_id = Number(_id);
    console.log(this.getKeyByValue(this.all_listings, _id));
  }

  getKeyByValue(object: any, value: string) {

    this.index = Number(Object.keys(object).find(key => object[key]._id === value));
    console.log(this.index)
    return this.all_listings[this.index];
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.setSelectedListing(this.route.snapshot.params.id);
    this.title = this.selected_listing.address;
  }

}
