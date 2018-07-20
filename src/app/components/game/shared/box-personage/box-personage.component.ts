import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-box-personage',
  templateUrl: './box-personage.component.html',
  styleUrls: ['./box-personage.component.css']
})
export class BoxPersonageComponent implements OnInit {

  private form: FormGroup;
  @Output() detalhe = new EventEmitter();
  @Output() pontuacao = new EventEmitter(); 
  @Input() personageDetail;

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
    const reply = this.form.get("reply").value;
    this.pontuacao.emit(reply);
  }

  setDetail() {
    this.detalhe.emit(true);
  }

}
