import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get(API);
  }

  getCharacter(name: string) {
    return this.http.get(API + "?search=" + name);
    
  }
}

const API = "futuramaapi.herokuapp.com/api/v2/characters";
