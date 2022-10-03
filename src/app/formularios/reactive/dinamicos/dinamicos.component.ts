import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.fb.array(
      [
        ['Stranger things', Validators.required], // required de cada elemento del array
        ['Game of thrones', Validators.required],
      ],
      Validators.required // required del array
    ),
  });

  favorite: FormControl = this.fb.control('', Validators.required);
  addFavorite() {
    if (this.favorite.invalid) {
      return;
    }
    // Después de verificar que el campo es valido, procedemos a agregarlo
    // new FormControl(this.favorite.value, Validators.required) //Así tambien funciona
    this.favoritesArr.push(
      this.fb.control(this.favorite.value, Validators.required)
    );

    this.favorite.reset();
  }
  deleteFavorite(index: number) {
    this.favoritesArr.removeAt(index);
  }
  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
    // return this.myForm.controls['favorites'] as FormArray;
  }
  isValidField(field: string) {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }
  saveData() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched(); //Para marcar todo como touched y que muestre los errores
      return;
    }
    console.log('Saving data');
    console.log(this.myForm.value);
  }
  // deleteItem(index: number) {
  //   console.log('delete');
  // }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
