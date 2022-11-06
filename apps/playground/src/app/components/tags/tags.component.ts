import { Component, Input } from '@angular/core';
import { TagType } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'project-majeur-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  @Input() tags: TagType[] = [];

  constructor(private router: Router) {}

  goGameByTag(category: string = '') {
    console.log(category);
    this.router.navigate(['/games'], { queryParams: { category } });
  }
}
