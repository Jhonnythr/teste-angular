import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name : string = "jonathan"
  age:number = 24
  job = "Programador"
  hobbier = ['correr','estudar', 'jogar']
  car = {
    name:'Polo',
    year:2019
  }

  constructor() { }

  ngOnInit(): void {
  }

}
