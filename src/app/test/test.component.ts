import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../models/chapter.model';
import { Task } from '../models/task.model';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  tasks: Array<Task>;
  constructor(
    private route: ActivatedRoute,
    private chapterService: ChapterService
  ) {}

  ngOnInit(): void {
    this.tasks = this.chapterService.getRandomTaskFromEachChapter();
    console.log(this.tasks);
  }

  getRandomTask(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
