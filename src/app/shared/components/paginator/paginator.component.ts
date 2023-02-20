import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() length!: number;
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Output() page = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  get pages(): number[] {
    const start = Math.max(0, this.pageIndex - 2);
    const end = Math.min(this.totalPages - 1, this.pageIndex + 2);
    return Array(end - start + 1).fill(0).map((_, i) => start + i);
  }

  setPage(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.totalPages && pageIndex !== this.pageIndex) {
      this.pageIndex = pageIndex;
      this.page.emit(this.pageIndex);
    }
  }
}
