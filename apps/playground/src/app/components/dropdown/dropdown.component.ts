import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-majeur-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})

export class DropdownComponent {
  @Input() title: string | undefined;
  @Input() options: string[] | undefined;
}
