import { Component, Input, OnInit } from '@angular/core';

const defaultProfilePicture =
  'https://cengage.force.com/resource/1607465003000/loginIcon';

@Component({
  selector: 'project-majeur-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css'],
})
export class ProfilePictureComponent implements OnInit {
  @Input() playerId: string | undefined = undefined;
  @Input() alt: string | undefined = 'profile';
  @Input() height = '60';
  @Input() width = '60';
  @Input() isCircle = false;
  src = defaultProfilePicture;

  ngOnInit(): void {
    console.log(this.playerId);
    if (this.playerId) {
      const calculateUrl = `https://firebasestorage.googleapis.com/v0/b/playground-prod-842c4.appspot.com/o/${this.playerId}.jpeg?alt=media`;
      this.src = calculateUrl;
    }
  }

  setDefaultPic() {
    this.src = defaultProfilePicture;
  }
}
