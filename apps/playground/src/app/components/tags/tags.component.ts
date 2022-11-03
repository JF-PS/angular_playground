import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component} from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'project-majeur-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];
  drop(event: CdkDragDrop<Vegetable>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
  
}
