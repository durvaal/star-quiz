import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.setForm();
  }

  setForm() {
    this.form = new FormGroup({
      reply: new FormControl(null, Validators.required),
    });
  }

  marcarPonto() {
    const reply = this.form.get("reply").value;
    this.pontuacao.emit(reply);
  }

  verDetalhes() {
    this.detalhe.emit(true);
  }

}
