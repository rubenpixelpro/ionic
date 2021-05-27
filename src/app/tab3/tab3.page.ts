import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { Camera, CameraResultType, CameraSource } from "@capacitor/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  photo: Observable<any>;
  uid: string;

  constructor(private angularFirestore: AngularFirestore, private angularFireAuth: AngularFireAuth) {

    angularFireAuth.user.subscribe((user)=> {
      this.uid = user.uid;
      this.photo = angularFirestore.collection("foto-perfil")
        .doc(this.uid)
        .valueChanges()
    });

  }

  async takePhoto(){
    const capturedPhoto = await Camera.getPhoto({
      quality: 10,
      height: 200,
      width: 200,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    
    this.angularFirestore.collection("foto-perfil")
      .doc(this.uid)
      .set({
        foto_src: capturedPhoto.dataUrl
      });
  }

 
}
