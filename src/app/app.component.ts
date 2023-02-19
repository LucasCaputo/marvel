import { Component, OnInit } from '@angular/core';
import { CharactersResponse } from './shared/interfaces/character.interface';

import { CharacterService } from './shared/services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'marvel';
  characters: CharactersResponse | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().subscribe(characters=>{
      this.characters = characters;
    })
  }
}
