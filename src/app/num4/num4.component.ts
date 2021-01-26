import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num4',
  templateUrl: './num4.component.html',
  styleUrls: ['./num4.component.css']
})
export class Num4Component {

  constructor() { }

  result1: string
  result2: string
  result: string
  answer: number
  isRight: boolean = true;
  Help(){
    this.result1 = 'Попробуйте отвесить сначала 12 кг, затем  — 6 кг, затем  — 3 кг. '
    this.result2 = ''
  }
  rightAnswer(){
    this.result2 = 'Отвешиваем 12 кг гвоздей и откладываем их в сторону. От оставшихся 12 кг отвешиваем 6 кг и откладываем их в другую сторону. От оставшихся 6 кг отвешиваем 3 кг и соединяем их с отложенными 6 кг. Получаем искомые 9 кг гвоздей. Оставшиеся гвозди составят 15 кг'
    this.result1 = ''
  }
  Answer(){
    if(this.answer!=null){
      if(this.answer==3){
        this.result='Ответ верный. Вы молодец!'
        this.isRight=true
      }else{
        this.result='Ответ неверный. Попробуйте еще раз'
        this.isRight=false
      }
    }
  }
}
