import { Component, computed, input, signal, effect } from '@angular/core';
import { ITest } from '../../../data/testData';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-wrapper-test',
  imports: [NgClass, RouterLink],
  templateUrl: './wrapper-test.html',
  styleUrl: './wrapper-test.css',
})
export class WrapperTest {
  questions = input<ITest[]>();
  selectedAnswer = signal<any>(null);
  isLocked = signal<boolean>(false);
  isFinished = signal<boolean>(false);

  currentIndex = signal<number>(0);

  timer = signal<number>(30);

  score = signal<number>(0);

  // current question
  currentQuetion = computed(() => {
    const index = this.currentIndex();
    const list = this.questions();
    return list ? list[index] : null;
  });

  // total questions
  total = computed(() => this.questions()?.length ?? 0);

  constructor() {
    this.startTimer();
  }

  // TIMER LOGIC
  startTimer() {
    setInterval(() => {
      if (this.isFinished()) return;

      this.timer.update(v => {
        if (v === 1) {
          this.nextQuetion(); // auto next
          return 30;
        }
        return v - 1;
      });
    }, 1000);
  }

  // NEXT QUESTION
nextQuetion() {
  const list = this.questions();
  if (!list) return;

  const isLast = this.currentIndex() >= list.length - 1;

  if (isLast) {
    this.isFinished.set(true);
    return;
  }

  this.currentIndex.update(v => v + 1);

  // RESET
  this.selectedAnswer.set(null);
  this.isLocked.set(false);
  this.timer.set(30);
}

  // ANSWER CLICK
selectAnswer(answer: any) {
  if (this.isLocked()) return;

  this.selectedAnswer.set(answer);
  this.isLocked.set(true);

  if (answer.correct) {
    this.score.update(v => v + 1);
  }
}
  
}