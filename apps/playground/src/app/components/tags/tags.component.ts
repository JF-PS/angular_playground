import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'project-majeur-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input() tag: string | undefined;
}
