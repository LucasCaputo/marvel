import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CharacterResponse } from 'src/app/shared/interfaces/character-response.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  search ='';
  searchUpdate = new Subject<string>();
  characters: CharacterResponse | undefined;

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

  getCharacters(offset: number, nameStartsWith: string, limit: number = 10): void {
    this.characterService.getCharacter({offset, nameStartsWith, limit}).subscribe(characters=>{
      this.characters = characters;
    })
  }
}
