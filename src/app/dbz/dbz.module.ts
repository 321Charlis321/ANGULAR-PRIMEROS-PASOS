import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages.component';
import { ListComponent } from './components/list/list.component';
import { AddDbzCharacterComponent } from './components/add-dbz-character/add-dbz-character.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [

    MainPagesComponent,
     ListComponent,
     AddDbzCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPagesComponent
  ]
})
export class DBZModule { }
