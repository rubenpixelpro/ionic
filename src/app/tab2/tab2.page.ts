import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from '../types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  favoriteCharacterList: Observable<any>;
  uid: string;

  constructor(private angularFirestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth) {

      angularFireAuth.user.subscribe((user)=> {
        this.uid = user.uid;
        this.favoriteCharacterList = angularFirestore.collection("favoritos")
        .doc(this.uid)
        .collection("favoritos")
        .valueChanges();

      });

    }

}
