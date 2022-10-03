import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: number;
  name: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.scss'],
})
export class DinamicosComponent implements OnInit {
  newFavorite: string = '';
  person: Person = {
    name: 'Mateo Jaramillo',
    favorites: [
      {
        id: 1,
        name: 'Game of Thrones',
      },
      {
        id: 2,
        name: 'Rings of Power',
      },
    ],
  };
  constructor() {}
  @ViewChild('dataForm') dataForm!: NgForm;

  ngOnInit(): void {
    // const userAgent = navigator.userAgent.toLowerCase();
    // if (/iphone|ipad|phone/i.test(userAgent)) {
    //   window.location.href =
    //     'https://apps.apple.com/co/app/clickam/id1495823258';
    // } else if (/android|x11/i.test(userAgent)) {
    //   window.location.href =
    //     'https://play.google.com/store/apps/details?id=com.clickam.appcompania';
    // } else {
    //   window.location.href = 'https://www.clickam.com.co/inicio';
    // }
  }

  saveData() {
    console.log('Posting product');
  }
  requiredValidator() {
    return this.dataForm.invalid;
  }
  addFavorite() {
    const item: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newFavorite, //Se puede usar un [(ngModel)]=variable
      // name: this.dataForm.value.add_favorite, //Se puede usar un [(ngModel)]=variable
      // Para que el dato no tenga que pertenecer al formulario
    };
    this.person.favorites.push(item);
    // this.dataForm.value.add_favorite = ''; // No permite borrar esa data ya que toca
    //usar el reset que borra todo aunque se puede re definir los datos pero los que son
    //dinámicos no se puede ya que su nombre varía
    // this.dataForm.reset({
    //   add_favorite: '',
    // });
    this.newFavorite = '';
  }
  deleteItem(index: number) {
    this.person.favorites.splice(index, 1);
  }
}
