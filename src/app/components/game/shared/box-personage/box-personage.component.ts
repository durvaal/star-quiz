import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-personage',
  templateUrl: './box-personage.component.html',
  styleUrls: ['./box-personage.component.css']
})
export class BoxPersonageComponent implements OnInit {

  private form: FormGroup;
  private result: number = 0;
  private reply: boolean;
  @Output() details = new EventEmitter();
  @Output() pontuation = new EventEmitter();
  @Input() personageDetail;
  @Input() pathImage;
  @Input() personage;
  @ViewChild("modalResult") private modalResult;
  @ViewChild("modalNext") private modalNext;

  constructor() { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = new FormGroup({
      reply: new FormControl(null, Validators.required),
    });
  }

  setPontuation() {
    const replySended = this.form.get("reply").value;
    this.pontuation.emit(replySended);

    if(this.personage[0]["name"].toUpperCase() == replySended.toUpperCase()) {
      this.reply = true;
    } else {
      this.reply = false;
    }
  }

  setDetail() {
    this.details.emit(true);
  }

  openModalResult(result) {
    this.result = result;
    this.modalResult.nativeElement.click();
  }

  openModalNext(open) {
    this.modalNext.nativeElement.click();
  }
}