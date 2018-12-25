import {Component, OnInit} from '@angular/core';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  toggleState = false;
  logHistory = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event: Event) {
    this.toggleState = !this.toggleState;
    this.logHistory.push(new Date());
  }

}
