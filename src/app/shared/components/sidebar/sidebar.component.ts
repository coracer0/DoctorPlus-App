import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  
  pages: string[] = ['Inicio', 'Admin', 'Consultas', 'Crear Doctor', 'Hola'];

  constructor() { }

  ngOnInit(): void {
  }


}
