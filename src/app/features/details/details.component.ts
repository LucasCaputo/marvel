import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterResponse } from 'src/app/shared/interfaces/character-response.interface';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit  {
  character: CharacterResponse | undefined;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute  
  ){}  

  ngOnInit(): void {
    this.characterService.getCharacterDetailsById(this.activatedRoute.snapshot.params['id'], 'comics').subscribe(
      (character) => this.character = character);
  }
}
