import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.css']
})
export class ModalGenericComponent implements OnInit {

  private form: FormGroup;
  private results: Array<any> = [];
  @Input() personageDetail;
  @Input() pontuation;
  @Output() openModalNext = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
    this.setForm();
    this.getResults();
  }

  setForm() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
    });
  }

  get name() {
    return this.form.get("name").value;
  }

  getLocalStorage(key: string) {
    JSON.parse(localStorage.getItem('key') || '[]');
  }

  setLocalStorage(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  saveResult() {
    const result = {
      name: this.form.get("name").value,
      email: this.form.get("email").value,
      pontuation: this.pontuation
    }

    this.results.push(result);
    this.setLocalStorage("results", this.results);
    this.openModalNext.emit(true);
  }

  getResults() {
    this.results = JSON.parse(localStorage.getItem('results') || '[]');
  }

  playAgain() {
    window.location.reload();
  }
}