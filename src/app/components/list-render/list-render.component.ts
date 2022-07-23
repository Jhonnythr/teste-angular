import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name:'Tom', type: 'Cat', age: 4},
    {name:'Tommy', type: 'Dog', age: 6},
    {name:'Jerry', type: 'Rat', age: 3}
  ]

  animal: Animal = {
    name: 'teste',
    type: 'alguma coisa',
    age: 5
  }

    animalDetails = ''

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void{
    this.animalDetails = ` O pet ${animal.name} tem ${animal.age} anos!` 
  }


  removeAnimal(animal:Animal){
    this.animals = this.listService.remove(this.animals, animal)
  }

}
