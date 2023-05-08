import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzServicesService {
  constructor() {}

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    ///*/ 1era manera de hacer :
    // const newCharacter : Character={
    //   id : uuid(),
    //   name:character.name,
    //   power: character.power
    // }
    // *2da manera de hacerlo mas corta
    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
    console.log(character);
  }
  // onDelete(index:number):void{
  //   this.characters.splice(index,1);
  //   console.log(index);

  // }

  deleteCharacter(id: string) {
    this.characters = this.characters.filter((character) => character.id != id);
  }
}
