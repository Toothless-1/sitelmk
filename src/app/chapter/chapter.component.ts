import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../models/chapter.model';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css'],
})
export class ChapterComponent implements OnInit {
  chapter: Chapter;
  chapterID: number;
  @Input() chapterId: number;
  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.chapter = this.chapterService.getOneChapter(+data.id);
    });
  }
}
