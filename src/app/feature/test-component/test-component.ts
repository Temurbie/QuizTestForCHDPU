import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATATEST, ITest } from '../../data/testData';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.html',
})
export class TestComponent implements OnInit {

  // ===== STATE =====
  currentIndex = signal<number>(0);
  allRandomTest = signal<ITest[]>([]);

  selectedAnswer: any = null;
  isLocked = false;

  score = signal(0);
  isFinished = signal(false);

  // ===== TIMER =====
  timeLeft = signal(30);
  timer: any;

  allTest = DATATEST;

  // ===== CURRENT QUESTION =====
  currentTest = computed(() => {
    const list = this.allRandomTest();
    const index = this.currentIndex();
    return list.length ? list[index] : null;
  });

  total = computed(() => this.allRandomTest().length);

  // ===== INIT =====
  ngOnInit(): void {
    this.getRandomQuestion(this.allTest);
    this.startTimer();
  }

  // ===== RANDOM =====
  getRandomQuestion(allQuestion: ITest[]) {
    const shuffled = [...allQuestion].sort(() => Math.random() - 0.5);
    this.allRandomTest.set(shuffled.slice(0, 30));
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
  selectAnswer(answer: any) {
    if (this.isLocked) return;

    this.selectedAnswer = answer;
    this.isLocked = true;

    if (answer.correct) {
      this.score.update(v => v + 1);
    }
  }

  // ===== NEXT =====
  nextQuestion() {
    clearInterval(this.timer);

    const list = this.allRandomTest();

    if (this.currentIndex() >= list.length - 1) {
      this.isFinished.set(true);
      return;
    }

    this.currentIndex.update(v => v + 1);

    this.selectedAnswer = null;
    this.isLocked = false;

    this.startTimer();
  }

}