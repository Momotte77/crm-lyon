import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../shared/enum/state.enum';
import { Prestation } from '../../../shared/models/presatation-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  states = Object.values(State);
  newItem = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public process(): void {
    // console.log(this.newItem);
    this.nItem.emit(this.newItem);
  }
}
