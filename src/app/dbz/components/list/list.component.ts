import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Output()
  public ondelete: EventEmitter<string> = new EventEmitter();

  @Input('personaje') // dentro del parentesis se le puede poner un nombre al input sino toma por defecto
  // el nombre de listCharacter
  public listCharacter: Character[] = [{ name: 'trunks', power: 10 }];

  onDeleteCharacter(id?: string): void {

    if(!id) return;
    this.ondelete.emit(id);
    console.log(id);
    // console.log(this.ondelete);
  }
}
