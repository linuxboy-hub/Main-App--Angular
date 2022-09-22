import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../interfaces/card-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData!: CardData;
  constructor() {}

  ngOnInit(): void {}
}
