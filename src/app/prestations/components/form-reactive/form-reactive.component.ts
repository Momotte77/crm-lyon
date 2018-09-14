import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName
} from '@angular/forms';
import { State } from '../../../shared/enum/state.enum';
import { Prestation } from '../../../shared/models/presatation-model';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // console.log(this.presta);
    if (this.presta) {
      this.initPrestation = this.presta;
    }
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      typePresta: [
        this.presta ? this.presta.typePresta : this.initPrestation.typePresta,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      client: [
        this.presta ? this.presta.client : this.initPrestation.client,
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      nbJours: [
        this.presta ? this.presta.nbJours : this.initPrestation.nbJours
      ],
      tjmHT: [this.presta ? this.presta.tjmHT : this.initPrestation.tjmHT],
      tauxTva: [
        this.presta ? this.presta.tauxTva : this.initPrestation.tauxTva
      ],
      state: [this.presta ? this.presta.state : this.initPrestation.state]
    });
  }

  private getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.presta) {
      return data;
    }
    const id = this.presta.id;
    return { id, ...data };
  }

  public process(): void {
    // const item = new Prestation(this.form.value);
    // console.log(item);
    this.nItem.emit(this.getItem(this.form.value));
  }

  public isError(formName: string): boolean {
    return this.form.get(formName).invalid && this.form.get(formName).touched;
  }

  redirect(): void {
    this.router.navigate(['/prestations']);
  }
}
