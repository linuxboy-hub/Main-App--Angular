import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('productForm') productForm!: NgForm;
  value = '';
  number = 0;
  constructor() {}

  ngOnInit(): void {}
  saveData(form: NgForm) {
    console.log('save data', form);
    // this.productForm.resetForm();
    this.productForm.resetForm({
      name: 'Resetted value',
      value: 0,
      quantity: 0,
    });
  }
}
