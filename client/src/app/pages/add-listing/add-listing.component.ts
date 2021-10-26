import { Component, ElementRef, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ListingsComponent } from '../../components/listings/listings.component';
import { NzUploadFile } from 'ng-zorro-antd/upload';

interface Category {
  _id: string;
  title: string;
  price: string;
  days_listed: number;
  img: string;
}

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./add-listing.component.css']
})

export class AddListingComponent implements OnInit {

  @ViewChild('bedElement', { static: false }) bedElement?: ElementRef;
  @ViewChild('bathElement', { static: false }) bathElement?: ElementRef;
  @ViewChild('sfElement', { static: false }) sfElement?: ElementRef;

  categories: Category[] = [
    {
      _id: '1304',
      title: 'Nature Nearby',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property1.jpg'
    },
    {
      _id: '2122',
      title: 'Healthcare',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property2.jpg'
    },
    {
      _id: '3102',
      title: 'Education',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property3.jpg'
    },
    {
      _id: '4234',
      title: 'Restaurants',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property4.jpg'
    },
    {
      _id: '5234',
      title: 'Family',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property5.jpg'
    },
    {
      _id: '6234',
      title: 'Sports',
      price: '$1,299,999',
      days_listed: 31,
      img: '../../assets/img/photos/property6.jpg'
    },
    {
      _id: '7234',
      title: 'Activities',
      price: '$899,999',
      days_listed: 32,
      img: '../../assets/img/photos/property7.jpg'
    },
    {
      _id: '8231',
      title: 'Groceries',
      price: '$699,999',
      days_listed: 86,
      img: '../../assets/img/photos/property8.jpg'
    }
  ];

  fileList2: NzUploadFile[] = [];
  category1: string = '';
  fileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '../../assets/img/photos/property1.jpg'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: '../../assets/img/photos/property2.jpg'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: '../../assets/img/photos/property3.jpg'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: '../../assets/img/photos/property4.jpg'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'done',
      url: '../../assets/img/photos/property6.jpg'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: '../../assets/img/photos/property5.jpg'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;
  formFilled = true;
  value = '';
  title = 'Input a number';

  setCategory1(category: string) {
    this.category1 = category;
  }

  handlePreview = async (file: NzUploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };



  onChange(value: string): void {
    this.updateValue(value);
  }

  // '.' at the end or only '-' in the input box.
  onBlur(): void {
    if (this.value.charAt(this.value.length - 1) === '.' || this.value === '-') {
      this.updateValue(this.value.slice(0, -1));
    }
  }

  updateValue(value: string): void {
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(+value) && reg.test(value)) || value === '' || value === '-') {
      this.value = value;
    }
    this.bedElement!.nativeElement.value = this.value;
    this.updateTitle();
  }

  updateTitle(): void {
    this.title = (this.value !== '-' ? this.formatNumber(this.value) : '-') || 'Input a number';
  }

  formatNumber(value: string): string {
    const stringValue = `${value}`;
    const list = stringValue.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
