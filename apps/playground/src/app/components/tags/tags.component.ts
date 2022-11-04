import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'project-majeur-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent{
  @Input() tags: string[] | undefined;
}
