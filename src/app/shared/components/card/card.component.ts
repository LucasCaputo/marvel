import { Component, Input } from '@angular/core';
import { CharacterResponse } from '../../interfaces/character-response.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() characters: CharacterResponse | undefined;
}
