import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss'],
})
export class BasicosComponent implements OnInit {
  // dataForm: FormGroup = new FormGroup({
  //   name: new FormControl('Mateo Jaramillo'),
  //   price: new FormControl(0),
  //   stock: new FormControl(0),
  // });
  // Para hacer esto mas sencillo se utiliza el formBuilder
  // que es un servicio
  dataForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
    // stock: [initialValue, [Validators list]],
  });
  saveData() {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched(); //Para marcar todo como touched y que muestre los errores
      return;
    }
    console.log('Saving data..');
    this.dataForm.reset();
  }

  isValidField(field: string) {
    return (
      this.dataForm.controls[field].errors &&
      this.dataForm.controls[field].touched
    );
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar valores
    // this.dataForm.setValue({ // no se usa setValue porque si falta un solo campo, explota
    this.dataForm.reset({
      name: 'RTX 3080 Ti',
      price: -10,
    });
  }
}
