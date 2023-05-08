import { Component } from '@angular/core';






export class CounterComponent {
  title = 'Hola Mundo';

  public counter: number = 10;

  increaseBy(value : number):void{
    this.counter += value;
  }
  reset():void {
this.counter= 10
  }

}
