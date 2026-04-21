import { Component, computed, signal } from '@angular/core';
import { DATATEST } from '../../data/testData';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-demo',
  imports: [NgClass],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo {
  demoData = DATATEST;
  
  currentData = this.demoData.slice(0, 7);
  // ===== STATE =====
  currentIndex = signal(0);
  selectedAnswer: any = null;
  isLocked = false;

  score = signal(0);

  // ===== TIMER =====
  timeLeft = signal(30);
  timer: any;

  // ===== CURRENT TEST =====
  currentTest = computed(() => {
    const list = this.currentData;
    return list[this.currentIndex()] || null;
  });

  total = computed(() => this.currentData.length);

  // ===== INIT =====
  ngOnInit() {
    this.startTimer();
  }

  // ===== TIMER =====
  startTimer() {
    this.timeLeft.set(30);

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update(v => v - 1);
      } else {
        this.nextQuestion();
      }
    }, 1000);
  }

  // ===== SELECT =====
  selectAnswer(ans: any) {
    if (this.isLocked) return;

    this.selectedAnswer = ans;
    this.isLocked = true;

    if (ans.correct) {
      this.score.update(v => v + 1);
    }
  }

  // ===== NEXT =====
  nextQuestion() {
    clearInterval(this.timer);

    if (this.currentIndex() >= this.total() - 1) {
      this.isFinished.set(true);
      return;
    }

    this.currentIndex.update(v => v + 1);
    this.selectedAnswer = null;
    this.isLocked = false;

    this.startTimer();
  }

  // ===== FINISH =====
  isFinished = signal(false);
}
