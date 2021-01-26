import { Component, Input, OnInit } from '@angular/core';
import { Chapter } from '../models/chapter.model';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css'],
})
export class ChapterListComponent implements OnInit {
  chapters: Array<Chapter>;
  chapterID: number;
  @Input() chapterId: number;
  clicked: boolean = false;
  constructor(private chapterService: ChapterService) {}

  ngOnInit(): void {
    this.chapters = this.chapterService.getAllChapters();
  }
  isClicked() {
    this.clicked = true;
  }
}
