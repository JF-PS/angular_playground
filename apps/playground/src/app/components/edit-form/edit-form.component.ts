import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ProfileData } from '../../model';

@Component({
  selector: 'project-majeur-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input() currentUser: ProfileData | undefined = undefined;

  constructor(private readonly formBuilder: FormBuilder) {}

  profileForm: FormGroup = this.formBuilder.group({
    playStyle: new FormControl(''),
    description: new FormControl(''),
    age: new FormControl(''),
  });

  @Output() submitProfile = new EventEmitter<ProfileData>();

  onSubmit() {
    const { playStyle, description, age } = this.profileForm.value;
    this.submitProfile.emit(new ProfileData('', playStyle, description, age));
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      playStyle: new FormControl(this.currentUser?.playStyle),
      description: new FormControl(this.currentUser?.description),
      age: new FormControl(this.currentUser?.age),
    });
  }
}
