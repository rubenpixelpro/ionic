import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './types';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(API);
  }

  getCharacter(name: string): Observable<Character> {
    return this.http.get<Character>(API + "?search=" + name);
    
  }
}

const API = "futuramaapi.herokuapp.com/api/v2/characters";
