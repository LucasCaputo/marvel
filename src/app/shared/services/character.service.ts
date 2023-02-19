import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharactersResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}

  getCharacters(offset: number, name?: string): Observable<CharactersResponse> {

    let params = new HttpParams()
      .set('limit', 10)
      .set('offset', offset);
    
    if(name?.length) params = params.set('nameStartsWith', name);
    
    return this.http.get<CharactersResponse>(this.baseURL+'/characters', {params});
  }
}
