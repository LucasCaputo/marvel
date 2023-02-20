import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CharactersResponse } from './shared/interfaces/character.interface';

import { CharacterService } from './shared/services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  search ='';
  searchUpdate = new Subject<string>();
  characters: CharactersResponse | undefined;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.searchUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.getCharacters(0, value);
      });

      this.searchUpdate.next(this.search)
  }

  changePage(page: number){
    this.getCharacters(page * 10, this.search)
  }

  getCharacters(offset: number, name: string): void {
    this.characterService.getCharacters(offset, name).subscribe(characters=>{
      this.characters = characters;
    })
  }
}
