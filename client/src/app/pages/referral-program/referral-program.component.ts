import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';


interface Listing {
  _id: string;
  address: string;
  price: string;
  days_listed: number;
  img: string;
}
@Component({
  selector: 'app-referral-program',
  templateUrl: './referral-program.component.html',
  styleUrls: ['./referral-program.component.css']
})

export class ReferralProgramComponent implements OnInit {


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

  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

}
