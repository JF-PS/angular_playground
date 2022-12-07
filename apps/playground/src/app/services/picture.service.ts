/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, tap, switchMap, filter } from 'rxjs';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
class PictureService {
  constructor(private readonly storage: AngularFireStorage) {}

  uploadPicture = (name: string, base64Img: string): Observable<string> => {
    const u8arr = this.toByteArray(base64Img);
    const filename = `${name}.jpeg`;
    const file: File = new File([u8arr], filename, { type: 'image/jpeg' });
    return this.uploadFile(filename, file);
  };

  uploadFile = (filename: string, file: File): Observable<string> => {
    const fileRef = this.storage.ref(filename);
    return this.storage
      .upload(filename, file)
      .snapshotChanges()
      .pipe(
        filter((e) => e?.state === 'success'),
        switchMap(() => fileRef.getDownloadURL())
      );
  };

  toByteArray(base64Img: string) {
    const bstr = atob(base64Img);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return u8arr;
  }
}

export default PictureService;
