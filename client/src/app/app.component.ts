import { Component } from '@angular/core';

interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSideNav = false;
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
      img: '../../assets/img/photos/property10.jpg'
    },
  ];
  isCollapsed = false;
  isCollapsed_listings = false;


  setShowSideNav() {
    this.showSideNav = !this.showSideNav;
  }
}
