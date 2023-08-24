import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: [],
})
export class FullComponent implements OnInit {
  handleToggle = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
