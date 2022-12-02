import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { ProfileData } from '../../model';
import { WebcamImage } from 'ngx-webcam';
import { PictureService } from '../../services';

@Component({
  selector: 'project-majeur-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  @Input() currentUser: ProfileData | undefined = undefined;
  trigger$ = new Subject<void>();
  profilePicture: string | null = '';

  @ViewChild('filePreview')
  private filePreview!: ElementRef;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly pictureService: PictureService
  ) {}

  profileForm: FormGroup = this.formBuilder.group({
    playStyle: new FormControl(''),
    description: new FormControl(''),
    age: new FormControl(''),
  });

  @Output() submitProfile = new EventEmitter<ProfileData>();

  onSubmit() {
    const { playStyle, description, age } = this.profileForm.value;
    if (this.currentUser?.id) {
      this.submitProfile.emit(
        new ProfileData(
          this.currentUser?.id,
          this.currentUser?.login,
          playStyle,
          description,
          age,
          this.profilePicture
        )
      );
    }
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      playStyle: new FormControl(this.currentUser?.playStyle),
      description: new FormControl(this.currentUser?.description),
      age: new FormControl(this.currentUser?.age),
    });
    if (this.currentUser) this.profilePicture = this.currentUser?.picture;
  }

  handleSnapshot($event: WebcamImage) {
    this.filePreview.nativeElement.src = $event.imageAsDataUrl;
    const base64Img = $event.imageAsBase64;
    const filename = `${this.currentUser?.id}`;
    this.pictureService.uploadPicture(filename, base64Img).subscribe((res) => {
      this.profilePicture = res;
    });
  }

  takePhoto = () => {
    this.trigger$.next();
  };

  hasPreview() {
    const preview = this.filePreview?.nativeElement?.src;
    return preview && !preview.includes('#');
  }
}
