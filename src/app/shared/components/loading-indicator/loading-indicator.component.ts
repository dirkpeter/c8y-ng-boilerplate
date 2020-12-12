import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() transparent: Boolean;

  constructor() { }

  ngOnInit(): void {
    this.transparent = this.transparent || false;
  }

}
