import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  public heroeNames:string [] = [ 'Spiderman', 'Iroman','She Hulk' , 'Thor','Hulk']
  public deleteHeroe? :string;  //se le pone interrigancion porque en algun momento el varlor va a ser udefine  S

  removeLastHeroe():void{


    this.deleteHeroe= this.heroeNames.pop();
    // this.deleteHeroe=this.heroeNames.pop();

    // console.log(deleteHeroe);

  }
}


