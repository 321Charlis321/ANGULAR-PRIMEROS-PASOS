import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServicesService } from '../services/dbz-services.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styles: [],
})
export class MainPagesComponent {

  constructor( private dbz_services:DbzServicesService){

  }

  get charters():Character[] {
    return [...this.dbz_services.characters];
  }

  deleteCharacter (id: string):void{
    this.dbz_services.deleteCharacter(id);
  }

  onNewCharacter(character:Character):void{
    this.dbz_services.onNewCharacter(character);
  }
}
