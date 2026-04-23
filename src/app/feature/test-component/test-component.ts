import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATATEST, ITest } from '../../data/testData';
import { TestData } from '../../share/service/testData/test-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.html',
})
export class TestComponent implements OnInit {
  private testDataS = inject(TestData)
  private router = inject(Router)
  testT = signal<number>(0); // vaqt
  testQ = signal<number>(0); // savol soni
  timeLeft = signal(0); 

  // ===== STATE =====
  currentIndex = signal<number>(0);
  allRandomTest = signal<ITest[]>([]);

  selectedAnswer: any = null;
  isLocked = false;

  score = signal(0);
  isFinished = signal(false);

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
  this.testDataS.testData$.subscribe(v => {
    this.testQ.set(v?.quentytyTest || 0);
    this.testT.set(v?.timeTest || 0); // vaqtni alohida ol

    // savollarni shu yerda generate qil
    this.getRandomQuestion(this.allTest);

    // timer ni shu yerda start qil
    this.startTimer();
  });
}

  // ===== RANDOM =====
getRandomQuestion(allQuestion: ITest[]) {
  const shuffled = [...allQuestion].sort(() => Math.random() - 0.5);
  this.allRandomTest.set(shuffled.slice(0, this.testQ()));
}

  // ===== TIMER =====
startTimer() {
  if (!this.testT()) return;

  this.timeLeft.set(this.testT()); // vaqtni set qilamiz

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
  returnTest(){
    this.router.navigate(['/home'])
  }
}