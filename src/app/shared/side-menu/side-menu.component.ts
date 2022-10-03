import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/formularios/interfaces/menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  templateMenu: MenuItem[] = [
    { text: 'Basics', route: '/formularios/template/basicos' },
    { text: 'Dynamic', route: '/formularios/template/dinamicos' },
    { text: 'Switches', route: '/formularios/template/switches' },
  ];
  reactiveMenu: MenuItem[] = [
    { text: 'Basics', route: '/formularios/reactivos/basicos' },
    { text: 'Dynamic', route: '/formularios/reactivos/dinamicos' },
    { text: 'Switches', route: '/formularios/reactivos/switches' },
  ];
  authMenu: MenuItem[] = [
    { text: 'Register', route: '/formularios/validations/register' },
    { text: 'Login', route: '/formularios/validations/login' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
