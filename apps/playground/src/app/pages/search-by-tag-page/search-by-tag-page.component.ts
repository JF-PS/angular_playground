/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services';
import { GameType } from '../../types';

@Component({
  selector: 'project-majeur-search-by-tag-page',
  templateUrl: './search-by-tag-page.component.html',
  styleUrls: ['./search-by-tag-page.component.css'],
})
export class SearchByTagPageComponent implements OnInit {
  gameListByTag: GameType[] = [];
  category = '';

  constructor(private route: ActivatedRoute, private ts: GameService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { category } = params;
      this.category = category;
      this.getGamesByTag(category);
    });
  }

  getGamesByTag = (category: string) => {
    this.ts.getGamesByParams({ category }).subscribe((res) => {
      this.gameListByTag = res;
    });
  };
}
