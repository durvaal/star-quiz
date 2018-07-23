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

  // Send the emition of event for the Component GameComponent
  previousPersonage() {
    this.previous.emit();
  }

  // Send the emition of event for the Component GameComponent
  nextPersonage() {
    this.next.emit();
  }

  // Send the emition of event for the Component GameComponent
  setPage(page) {
    this.selectPage.emit(page);
  }

}
