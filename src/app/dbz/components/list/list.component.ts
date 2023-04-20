import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();



  @Input()
  public characterList:Character[]=
  [
    {
      name:'Personaje3',
      power:10000
    }
  ];

  

  onDeleteCharacter(id?: string):void{
    console.log(id);   
    this.onDelete.emit(id);    
  }



}
