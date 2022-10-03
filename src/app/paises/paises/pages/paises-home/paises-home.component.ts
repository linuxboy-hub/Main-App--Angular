import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/paises/auth/interfaces/auth';
import { AuthService } from 'src/app/paises/auth/services/auth.service';
import { UAParser } from 'ua-parser-js';

@Component({
  selector: 'app-paises-home',
  templateUrl: './paises-home.component.html',
  styleUrls: ['./paises-home.component.scss'],
})
export class PaisesHomeComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  auth!: Auth;

  ngOnInit(): void {
    this.auth = JSON.parse(localStorage.getItem('user')!);
    var parser = new UAParser();
    if (parser.getOS().name === 'iOS') {
      this.document.location.href =
        'https://apps.apple.com/co/app/clickam/id1495823258';
    } else if (parser.getOS().name === 'Android') {
      this.document.location.href =
        'https://play.google.com/store/apps/details?id=com.clickam.appcompania';
    } else {
      this.document.location.href = 'https://www.clickam.com.co/inicio';
    }
  }
  logOut() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
