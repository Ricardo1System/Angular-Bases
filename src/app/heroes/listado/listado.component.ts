import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes:string[]=["Spiderman", "Ironman", "hulk", "Thor", "Capitan America"];
  heroesBorrados:String='';


  BorrarHeroe(){
    this.heroesBorrados= this.heroes.shift() || '';
    
  }
 

}
