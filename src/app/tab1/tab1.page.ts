import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../character.service';
import { Character } from '../types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  characterList: Observable<Character[]>;

  constructor(characterService: CharacterService) {
    setTimeout(()=> {
      this.characterList = characterService.getAllCharacters();
    }, 2000);
    
    

  }

}
