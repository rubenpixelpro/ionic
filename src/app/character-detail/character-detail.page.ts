import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterService } from '../character.service';
import { Character } from '../types';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {

  characterDetail: Observable<Character>;

  constructor(characterService: CharacterService,
    activatedRoute: ActivatedRoute) {
      const name = activatedRoute.snapshot.params["name"];

      this.characterDetail = characterService.getCharacter(name);
      console.log(this.characterDetail);

    }

  ngOnInit() {
  }

}
