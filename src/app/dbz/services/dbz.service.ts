import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
console.log(uuid())

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    
    public characters: Character[] =
    [
        {
        id:uuid(),
        name:'Personaje1',
        power:500
        },{
        id:uuid(),
        name:'Personaje2',
        power:5000
        },{
        id:uuid(),
        name:'Personaje4',
        power:7500
        }
    ];

    addCharacter(character:Character):void
    {
        const newCharacter:Character ={
           
            id:  uuid(),
            ...character
        };

        this.characters.push(newCharacter);
    }

    deleteCharacterById(id:string):void{
        this.characters = this.characters.filter (character => character.id != id);
    }

    
}