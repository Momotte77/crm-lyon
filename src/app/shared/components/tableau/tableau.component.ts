import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {
  @Input()
  collection: Object[];
  @Input()
  headers: string[];

  constructor() {
    // console.log(this.headers);
  }

  ngOnInit() {}
}
