import { Component, Input } from '@angular/core';
import { CharactersResponse } from '../../interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() characters: CharactersResponse | undefined;
}
