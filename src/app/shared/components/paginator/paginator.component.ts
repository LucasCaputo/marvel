import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() activePage!: number;
  @Output() pageChange = new EventEmitter<number>();

  change(offset: number) {
    this.pageChange.emit(offset)
  }
}
