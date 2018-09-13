import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { State } from '../../../shared/enum/state.enum';
import { Prestation } from '../../../shared/models/presatation-model';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  form: FormGroup;
  states = Object.values(State);
  private initPrestation = new Prestation();
  @Input()
  presta: Prestation;
  @Output()
  nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.presta) {
      this.initPrestation = this.presta;
    }
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      typePresta: [
        this.initPrestation.typePresta,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      client: [
        this.initPrestation.client,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      nbJours: [this.initPrestation.nbJours],
      tjmHT: [this.initPrestation.tjmHT],
      tauxTva: [this.initPrestation.tauxTva],
      state: [this.initPrestation.state]
    });
  }

  public process(): void {
    const item = new Prestation(this.form.value);
    console.log(item);
    this.nItem.emit(item);
  }

  public isError(formName: string): boolean {
    return this.form.get(formName).invalid && this.form.get(formName).touched;
  }
}
