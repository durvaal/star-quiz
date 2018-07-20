import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.css']
})
export class ModalGenericComponent implements OnInit {

  @Input() personageDetail;

  constructor() { }

  ngOnInit() {
  }

}
