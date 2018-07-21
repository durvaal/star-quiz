import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { GameComponent } from '../../game.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();
  @Output() selectPage = new EventEmitter();
  @Input() actualPage;

  constructor() { }

  ngOnInit() {
  }

  previousPersonage() {
    this.previous.emit();
  }

  nextPersonage() {
    this.next.emit();
  }

  setPage(page) {
    this.selectPage.emit(page);
  }

}
