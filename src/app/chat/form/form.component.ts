import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output()
  send = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(text: string) {
    this.send.emit(text);
  }

}
