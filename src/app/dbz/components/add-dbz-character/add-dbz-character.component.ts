import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-dbz-character',
  templateUrl: './add-dbz-character.component.html',
  styles: [
  ]
})
export class AddDbzCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> =  new EventEmitter();

    public character : Character ={
      name: 'Frank',
      power:1500
    }

    emitCharacter():void{
      console.log(this.character);

      if(this.character.name.length===0 ) return; // * Si no viene nombre no se acepta
      this.onNewCharacter.emit(this.character); // Para emiti el caracter


      this.character = {name: '' , power : 0 };

    }



}
