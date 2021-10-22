import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}
@Component({
  selector: 'app-share-listing',
  templateUrl: './share-listing.component.html',
  styleUrls: ['./share-listing.component.css']
})

export class ShareListingComponent implements OnInit {

  public elementType = NgxQrcodeElementTypes.URL;
  public correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

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

  

  selected_listing = this.all_listings[0];
  public index:number = 0;

  public value = 'https://realtyshare.io/listings/'+this.selected_listing._id;

  inputValue: string = 'https://realtyshare.io/listings/'+this.selected_listing._id;


  setSelectedListing(_id: string){
    this.selected_listing = this.getKeyByValue(this.all_listings, _id);
    //this.selected_listing_id = Number(_id);
    this.setFormValues(this.selected_listing._id)
    console.log(this.getKeyByValue(this.all_listings, _id));
  }

  setFormValues(_id: string){
    this.value = 'https://realtyshare.io/listings/'+_id;
    this.inputValue = 'https://realtyshare.io/listings/'+_id;
  }

  getKeyByValue(object: any, value: string) {

    this.index = Number(Object.keys(object).find(key => object[key]._id === value));
    console.log(this.index)
    return this.all_listings[this.index];
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.createNotification('success', 'Copied URL',val)
  }

  createNotification(type: string, title: string, content: string): void {
    this.notification.create(
      type,
      title,
      content
    );
  }

  public downloadQRCode(address: string, _id: string) {
    const fileNameToDownload = ''+address+'_'+_id+'_QRcode';
    let innerHTML = document.getElementsByClassName('QRCode')[0].innerHTML;
    let trimmedSrc = innerHTML.substring(10,innerHTML.length - 2 )
    console.log(trimmedSrc);

    const base64Img = trimmedSrc; 
    this.createNotification('success', 'QR-Code','PNG Image Downloaded Started.')

    fetch(base64Img)
       .then(res => res.blob())
       .then((blob) => {
          // IE
          if (window.navigator && window.navigator.msSaveOrOpenBlob){
             window.navigator.msSaveOrOpenBlob(blob,fileNameToDownload);
          } else { // Chrome
             const url = window.URL.createObjectURL(blob);
             const link = document.createElement('a');
             link.href = url;
             link.download = fileNameToDownload;
             link.click();
          }
       })
  }


  

  constructor(private route: ActivatedRoute, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.setSelectedListing(''+this.route.snapshot.params.id);
  }

}
