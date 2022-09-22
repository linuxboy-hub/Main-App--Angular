import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private cookiesService: CookiesService) {}
  user: string = 'mateo';
  isModal: boolean = false;
  ngOnInit(): void {
    if (this.cookiesService.getCookie('widget')) {
      this.isModal = true;
      console.log('There is a cookie');
    } else {
      console.log('theres not a cookie');
      this.isModal = false;
    }
  }
  setCookie() {
    this.cookiesService.setCookie({
      name: 'widget',
      value: true,
      session: true,
    });
  }
  showCookie() {
    console.log('user: ', this.cookiesService.getCookie(this.user));
    if (this.cookiesService.getCookie('widget')) {
      console.log('widget: ', this.cookiesService.getCookie('widget'));
    }
  }
  deleteCookie() {
    this.cookiesService.deleteCookie('widget');
  }
  closeModal() {
    this.isModal = false;
  }
  openModal() {
    this.isModal = true;
  }
}
