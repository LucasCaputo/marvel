import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharactersResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(this.baseURL+'/characters?limit=10&offset=0')
  }
}
