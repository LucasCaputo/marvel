import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterRequest } from '../interfaces/character-request.interface';
import { CharacterResponse, CharacterResponseData } from '../interfaces/character-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  baseURL = environment.baseApiURL;

  constructor(private http: HttpClient) {}
  
  getCharacter(params: CharacterRequest = {}): Observable<CharacterResponse> {
    let httpParams = new HttpParams();

    for (const [key, value] of Object.entries(params)) {
      if (value) {
        httpParams = httpParams.set(key, value instanceof Date ? value.toISOString() : value.toString());
      }
    }

    return this.http.get<CharacterResponseData>(this.baseURL+'/characters', { params: httpParams })
      .pipe(
        map((res: CharacterResponseData )=>res.data)
      )

  }
}
