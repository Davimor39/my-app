import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-defecto',
  templateUrl: './defecto.component.html',
  styleUrls: ['./defecto.component.css']
})
export class DefectoComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit(): void {
  }

}
