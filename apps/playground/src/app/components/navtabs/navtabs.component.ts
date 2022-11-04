import { Component, Input } from '@angular/core';

export interface TabProperties {
  label: string;
  content: unknown;
}

@Component({
  selector: 'project-majeur-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css'],
})

export class NavtabsComponent {
  @Input() tabs: TabProperties[];

  constructor() {
    this.tabs = [
      {label: 'First', content: 'Content 1'},
      {label: 'Second', content: 'Content 2'},
      {label: 'Third', content: 'Content 3'},
    ]
  }
}
