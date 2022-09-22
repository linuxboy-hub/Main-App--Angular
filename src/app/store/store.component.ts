import { Component, OnInit } from '@angular/core';
import { artsData } from './data';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  data = artsData;
  constructor() {}

  ngOnInit(): void {}
}
