import { Component, EventEmitter, Output } from '@angular/core';

/**
 * @title Button with modal
 */
@Component({
  selector: 'project-majeur-button-with-modal',
  templateUrl: './button-with-modal.component.html',
  styleUrls: ['./button-with-modal.component.css'],
})
export class ButtonWithModalComponent {
  @Output() submitLogin = new EventEmitter();

  onSubmit() {
    this.submitLogin.emit();
  }
}
