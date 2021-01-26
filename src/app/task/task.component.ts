import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from '../models/chapter.model';
import { Task } from '../models/task.model';
import { ChapterService } from '../services/chapter.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  chapter: Chapter;
  @Input() task: Task;
  taskId: number = null;
  chapterId: number = null;
  answer: number;
  result: string;
  forHelp: boolean = false;
  solution: boolean = false;
  taskIsPressed: boolean = false;
  isRight: boolean;
  @Input() itIsExam: boolean = false;
  maxNumberOfChapterTasks: number;
  numbersOfChapterTasks: Array<number> = [];

  constructor(
    private chapterService: ChapterService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (!this.itIsExam) {
      this.activateRoute.params.subscribe((params) => {
        this.taskId = +params.id;
        console.log(this.taskId);
        if (this.chapterId != null)
          this.task = this.chapterService.getTaskInChapter(
            this.chapterId,
            this.taskId
          );
        this.setMaxNumberOfChapterTasks(this.chapterId);
      });
      this.activateRoute.queryParams.subscribe((params) => {
        this.chapterId = +params.chapterID;
        console.log(this.chapterId);
        if (this.taskId != null)
          this.task = this.chapterService.getTaskInChapter(
            this.chapterId,
            this.taskId
          );
        this.setMaxNumberOfChapterTasks(this.chapterId);
      });
    }
  }

  setMaxNumberOfChapterTasks(id: number) {
    this.maxNumberOfChapterTasks = this.chapterService.getMaxNumberOfChapterTasks(
      id
    );
    this.numbersOfChapterTasks = [
      ...Array(this.maxNumberOfChapterTasks).keys(),
    ];
  }

  checkAns() {
    if (this.answer != this.task.rightAnswer) {
      this.result = 'Ответ неверный. Попробуйте ещё раз...';
      this.isRight = false;
      this.solution = false;
      this.forHelp = false;
    } else {
      this.result = 'Ответ верный!';
      this.isRight = true;
      this.solution = false;
      this.forHelp = false;
    }
  }

  getHelp() {
    this.forHelp = !this.forHelp;
    this.solution = false;
    this.result = '';
  }

  showSolution() {
    this.solution = !this.solution;
    this.forHelp = false;
    this.result = '';
  }

  TaskIsPressed() {
    this.taskIsPressed = true;
  }

  // console.log(this.activateRoute.snapshot.root);
}
