import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../models/task.model';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-num1',
  templateUrl: './num1.component.html',
  styleUrls: ['./num1.component.css'],
})
export class Num1Component {
  task: Task;
  @Input() taskId: number;
  @Input() chapterId: number;
  @Input() chapterName: string;
  answer: number;
  result: string;
  forHelp: boolean = false;
  solution: boolean = false;
  constructor(
    private chapterService: ChapterService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.task = this.chapterService.getTaskInChapter(
      this.chapterId,
      this.taskId
    );
  }

  checkAns() {
    if (this.answer != this.task.rightAnswer) {
      this.result = 'Ответ неверный.';
    } else {
      this.result = 'Ответ верный.';
    }
  }

  getHelp() {
    this.forHelp = !this.forHelp;
  }

  showSolution() {
    this.solution = !this.solution;
  }
}
