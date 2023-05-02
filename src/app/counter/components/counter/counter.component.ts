
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Conuter {{counter}} </h3>

<button (click)="increaseBy(+1)" class="btn btn-primary "> + 1 </button>

<button (click)="reset()" class="btn btn-danger m-2">Reset </button>
<button (click)="increaseBy(-1)" class="btn btn-warning"> - 1 </button>
  `,
  styles: [
  ]
})


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
