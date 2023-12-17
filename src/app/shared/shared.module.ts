import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [HeaderComponent,NotfoundComponent],
  imports: [
    CommonModule
  ],  exports:[
    HeaderComponent,NotfoundComponent
  ]
})
export class SharedModule { }
