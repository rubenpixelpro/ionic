import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    
  }

  getCharacter(name: string) {
    
    
  }
}

const API = "futuramaapi.herokuapp.com/api/v2/characters";
