import { Component } from '@angular/core';

import { Camera, CameraResultType, CameraSource } from "@capacitor/core";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  photo: string;

  constructor() {}

  async takePhoto(){
    const capturedPhoto = await Camera.getPhoto({
      quality: 10,
      height: 200,
      width: 200,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = capturedPhoto.dataUrl;
  }

 
}
