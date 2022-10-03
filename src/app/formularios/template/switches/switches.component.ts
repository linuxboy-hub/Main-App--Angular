import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  notifications: boolean = false;
  conditions!: boolean;
  // selectedCities: string[] = [];

  person = {
    gender: 'M',
    notifications: true,
  };

  saveData() {
    console.log('Saving data...');
  }

  constructor() {}

  ngOnInit(): void {}
}
