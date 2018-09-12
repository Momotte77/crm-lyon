import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enum/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  constructor() {}
  @Input()
  appState: State;
  @HostBinding('class')
  classTd;


  ngOnChanges() {
    console.log(this.appState);
    this.classTd = this.formatClass(this.appState);
  }

  private formatClass(appState: State): string {
      return `state-${
        appState.normalize('NFD')
        .replace(/[\u0300-\u036f\s]/g, '')
        .toLowerCase()
      }`;
  }
}

// recupere le state
// en fct du state return une chaine like state-en-attente
// remove all accents of state
// remove tous les espaces and concat result whith state-

