import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['F', Validators.required],
    notifications: [true, Validators.required],
    conditions: [false, Validators.requiredTrue],
  });

  person = {
    gender: 'M',
    notifications: true,
  };

  saveData() {
    const formValue = { ...this.myForm.value };
    delete formValue.conditions;

    this.person = formValue;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Aqui voy a establecerle la informacion al formulario ya que lo primero que debo hacer es crearlo
    // y luego en este onInit inicializar con los valores provenientes del backend por ejemplo
    this.myForm.reset(this.person); // Esto me pone el conditions en null porque person no tiene este valor
    // por tanto puedo hacer un spread
    this.myForm.reset({ ...this.person, conditions: false });
  }
}
