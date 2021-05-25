import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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

  characterDetail: Observable<Character[]>;
  uid: string;
  constructor(characterService: CharacterService,
    activatedRoute: ActivatedRoute, 
    private angularFirestore: AngularFirestore, 
    private angularFireAuth: AngularFireAuth) {
      const name = activatedRoute.snapshot.params["name"];

      this.characterDetail = characterService.getCharacter(name);
      angularFireAuth.user.subscribe((user)=> {
        this.uid = user.uid;
      });

    }

  ngOnInit() {
  }

  addFavorites() {
    this.characterDetail.subscribe((character)=> {
      this.angularFirestore.collection("favoritos")
        .doc(this.uid)
        .collection("favoritos", (ref)=> {
          return ref.where("Name", "==", character[0].Name);
        }) 
        .get()
        .subscribe((doc)=> {
          if(doc.empty) {
            this.angularFirestore.collection("favoritos")
            .doc(this.uid)
            .collection("favoritos")
            .add(character[0]);
          }
        })      
    });
  }
 
  
}
