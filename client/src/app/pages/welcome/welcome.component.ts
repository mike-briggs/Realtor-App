import { Component, OnInit } from '@angular/core';

interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  toggleTiles = localStorage.getItem('toggle') == null ? false : JSON.parse(localStorage.getItem('toggle') == "false" ? "false" : "true") === true;

  all_listings: Listing[] = [
    {
      _id: '1304',
      address: '218 River Ave Toronto ON M4K 1C5',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property1.jpg'
    },
    // {
    //   _id: '2122',
    //   address: '5 Birch Cres York ON M9N 1G5',
    //   price: '$699,999',
    //   days_listed: 86,
    //   img: '../../assets/img/photos/property2.jpg'
    // },
    // {
    //   _id: '3102',
    //   address: '15 Thickson St. North York ON M6M 5B5',
    //   price: '$1,299,999',
    //   days_listed: 31,
    //   img: '../../assets/img/photos/property3.jpg'
    // },
    // {
    //   _id: '4234',
    //   address: '218 Brock St. Toronto ON M4K 1C5',
    //   price: '$899,999',
    //   days_listed: 32,
    //   img: '../../assets/img/photos/property4.jpg'
    // },
    // {
    //   _id: '5234',
    //   address: '123 Chiltern Pl. Whitby ON M9N 1G5',
    //   price: '$699,999',
    //   days_listed: 86,
    //   img: '../../assets/img/photos/property5.jpg'
    // },
    // {
    //   _id: '6234',
    //   address: '15 Martha Eaton Way North York ON M6M 5B5',
    //   price: '$1,299,999',
    //   days_listed: 31,
    //   img: '../../assets/img/photos/property6.jpg'
    // },
    // {
    //   _id: '7234',
    //   address: '457 Riverdale Ave Toronto ON M4K 1C5',
    //   price: '$899,999',
    //   days_listed: 32,
    //   img: '../../assets/img/photos/property7.jpg'
    // },
    // {
    //   _id: '8231',
    //   address: '225 Bellevue Cres York ON M9N 1G5',
    //   price: '$699,999',
    //   days_listed: 86,
    //   img: '../../assets/img/photos/property8.jpg'
    // },
    // {
    //   _id: '92342',
    //   address: '135 Martha Eaton Way North York ON M6M 5B5',
    //   price: '$1,299,999',
    //   days_listed: 31,
    //   img: '../../assets/img/photos/property9.jpg'
    // },
    // {
    //   _id: '10234',
    //   address: '15 Martha Eaton Way North York ON M6M 5B5',
    //   price: '$1,299,999',
    //   days_listed: 31,
    //   img: '../../assets/img/photos/property10.jpg'
    // },
  ];

  setToggleTiles() {
    this.toggleTiles = !this.toggleTiles;
    localStorage.setItem('toggle', '' + this.toggleTiles);

  }

  constructor() { }

  ngOnInit() {
  }

}
