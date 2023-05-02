import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

    public name:string = 'iroman';
    public edad:number = 24;


get capitalizedName():string{

  return 'hi World'

}

getheroesDescription():string{
  return `${this.name} - ${this.edad}`;
}

changeHero():void{
this.name = 'Spiderman'

}

changeAge():void{
  this.edad=50



}
resetForm():void{
  this.name= 'iroman';
  this.edad=24
}

}
