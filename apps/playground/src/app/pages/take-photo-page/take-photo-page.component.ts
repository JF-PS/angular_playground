import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileData } from '../../model';
import { WebcamImage } from 'ngx-webcam';
import { PictureService, UserService } from '../../services';

@Component({
  selector: 'project-majeur-take-photo-page',
  templateUrl: './take-photo-page.component.html',
  styleUrls: ['./take-photo-page.component.css'],
})
export class TakePhotoPageComponent implements OnInit {
  currentUser: ProfileData | undefined = undefined;
  trigger$ = new Subject<void>();
  width = '100';

  @ViewChild('filePreview')
  private filePreview!: ElementRef;

  constructor(
    private readonly userService: UserService,
    private readonly pictureService: PictureService
  ) {}

  ngOnInit(): void {
    this.userService.profile$.subscribe((res) => {
      this.currentUser = res;
    });
  }

  handleSnapshot($event: WebcamImage) {
    this.filePreview.nativeElement.src = $event.imageAsDataUrl;
    const base64Img = $event.imageAsBase64;
    const filename = `${this.currentUser?.id}`;
    this.pictureService.uploadPicture(filename, base64Img).subscribe();
  }

  takePhoto = () => {
    this.trigger$.next();
  };

  hasPreview() {
    const preview = this.filePreview?.nativeElement?.src;
    return preview && !preview.includes('#');
  }
}
