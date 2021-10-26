import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsComponent } from '../../components/listings/listings.component';

interface Listing {
  _id: string;
  address: string;
  desc: string;
  type: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  amenities: Amenity[];
  days_listed: number;
  img: string;
}

interface Amenity {
  id: number;
  type: string;
  img: string;
  title: string;
  desc: string;
}
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  displayAdmin = false;

  id = 0;

  all_listings: Listing[] = [
    {
      _id: '1304',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$899,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/amenities/amenity1.png', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Home', img: '../../assets/img/photos/amenities/amenity2.png', title: 'Family-Ready Kitchen', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 32,
      img: '../../assets/img/photos/property1.jpg'
    },
    {
      _id: '2122',
      address: '5 Bellevue Cres York ON M9N 1G5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$699,999',
      bedrooms: 5,
      bathrooms: 4,
      square_feet: 3431,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 86,
      img: '../../assets/img/photos/property2.jpg'
    },
    {
      _id: '3102',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$1,299,999',
      bedrooms: 5,
      bathrooms: 5,
      square_feet: 4340,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 31,
      img: '../../assets/img/photos/property3.jpg'
    },
    {
      _id: '4234',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$899,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 32,
      img: '../../assets/img/photos/property4.jpg'
    },
    {
      _id: '5234',
      address: '5 Bellevue Cres York ON M9N 1G5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$699,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 86,
      img: '../../assets/img/photos/property5.jpg'
    },
    {
      _id: '6234',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$1,299,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 31,
      img: '../../assets/img/photos/property6.jpg'
    },
    {
      _id: '7234',
      address: '218 Riverdale Ave Toronto ON M4K 1C5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$899,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 32,
      img: '../../assets/img/photos/property7.jpg'
    },
    {
      _id: '8231',
      address: '5 Bellevue Cres York ON M9N 1G5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Single-Detached',
      price: '$699,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 86,
      img: '../../assets/img/photos/property8.jpg'
    },
    {
      _id: '92342',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Apartment',
      price: '$1,299,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 31,
      img: '../../assets/img/photos/property9.jpg'
    },
    {
      _id: '10234',
      address: '15 Martha Eaton Way North York ON M6M 5B5',
      desc: 'Designed by architect Richard Wengle. One of a kind over looking south valley. Over 3,000 square feet of luxury living space. Rear gardens boasting stone terrace, swimming pool and hot tub with stone exterior.',
      type: 'Apartment',
      price: '$1,299,999',
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2134,
      amenities: [
        { id: 1, type: 'Nature Nearby', img: '../../assets/img/photos/property2.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 2, type: 'Nature Nearby', img: '../../assets/img/photos/property3.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 3, type: 'Nature Nearby', img: '../../assets/img/photos/property4.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
        { id: 4, type: 'Nature Nearby', img: '../../assets/img/photos/property5.jpg', title: '5 Minutes away from huge greenspace', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
      ],
      days_listed: 31,
      img: '../../assets/img/photos/property12.jpg'
    },
  ];



  public selected_listing: any;
  public title: string = '';
  public index: number = 0;

  setSelectedListing(_id: string) {
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
