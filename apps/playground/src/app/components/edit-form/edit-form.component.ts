import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileData } from '../../model';

@Component({
  selector: 'project-majeur-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent {
  constructor(private readonly formBuilder: FormBuilder) {}

  profileForm: FormGroup = this.formBuilder.group({
    playStyle: new FormControl('chill'),
    description: new FormControl(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst feugiat scelerisque feugiat aliquet massa semper.'
    ),
    age: new FormControl('10-20'),
  });

  @Output() submitProfile = new EventEmitter<ProfileData>();

  onSubmit() {
    const {
      playStyle = 'chill',
      description = 'Lorem ipsum ...',
      age = '10-20',
    } = this.profileForm.value;
    this.submitProfile.emit(new ProfileData('', playStyle, description, age));
  }
}
