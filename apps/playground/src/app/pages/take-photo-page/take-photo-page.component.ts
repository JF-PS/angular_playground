import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ProfileData } from '../../model';
import { WebcamImage } from 'ngx-webcam';
import { PictureService, UserService } from '../../services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'project-majeur-take-photo-page',
  templateUrl: './take-photo-page.component.html',
  styleUrls: ['./take-photo-page.component.css'],
})
export class TakePhotoPageComponent implements OnInit {
  currentUser: ProfileData | undefined = undefined;
  trigger$ = new Subject<void>();
  width = '100';
  src =
    'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=';

  picture: null | { filename: string; base64Img: string } = null;

  @ViewChild('filePreview')
  private filePreview!: ElementRef;
  file: File | null = null;

  constructor(
    private readonly userService: UserService,
    private readonly pictureService: PictureService,
    private toastr: ToastrService,
    private readonly router: Router
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
    this.picture = { base64Img, filename };
  }

  takePhoto = () => {
    this.trigger$.next();
  };

  onSelectFile = ($event: any) => {
    const currentFile = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(currentFile);
    reader.onloadend = () => {
      this.src = reader.result as string;
      this.file = currentFile;
    };
  };

  photoUploadWithSuccess = () => {
    this.toastr.success('Photo de profile mis à jour');
  };

  photoUploadError = () => {
    this.toastr.error('Vous n`avez pas choisit de nouvelle photo de profile');
  };

  goBackToEditProfile = () => {
    this.router.navigateByUrl('/edit-profile');
  };

  SubmitPicture = () => {
    const filename = `${this.currentUser?.id}`;
    if (this.picture) {
      this.pictureService
        .uploadPicture(filename, this.picture.base64Img)
        .subscribe(() => {
          this.photoUploadWithSuccess();
          this.goBackToEditProfile();
        });
    } else if (this.file) {
      this.pictureService
        .uploadFile(`${filename}.jpeg`, this.file)
        .subscribe(() => {
          this.photoUploadWithSuccess();
          this.goBackToEditProfile();
        });
    } else {
      this.photoUploadError();
    }
  };
}
