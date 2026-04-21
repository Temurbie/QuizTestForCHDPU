import { Component, computed, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATATEST, ITest } from '../../data/testData';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent implements OnInit {

  // ======================
  // STATE
  // ======================
  currentIndex = signal<number>(0);
  allRandomTest = signal<ITest[]>([]);

  selectedAnswer: any = null;
  isLocked = false;

  allTest = DATATEST;

  // ======================
  // CURRENT QUESTION
  // ======================
  currentTest = computed(() => {
    const list = this.allRandomTest();
    const index = this.currentIndex();
    return list.length ? list[index] : null;
  });

  // ======================
  // INIT
  // ======================
  ngOnInit(): void {
    this.getRandomQuestion(this.allTest);
  }

  // ======================
  // RANDOM QUESTIONS
  // ======================
  getRandomQuestion(allQuestion: ITest[]) {
    const shuffled = [...allQuestion].sort(() => Math.random() - 0.5);
    const data = shuffled.slice(0, 30);
    this.allRandomTest.set(data);
  }

  // ======================
  // SELECT ANSWER
  // ======================
  selectAnswer(answer: any) {
    if (this.isLocked) return;

    this.selectedAnswer = answer;
    this.isLocked = true;
  }

  // ======================
  // NEXT QUESTION
  // ======================
  nextQuestion() {
    const list = this.allRandomTest();

    // quiz tugasa stop
    if (this.currentIndex() >= list.length - 1) {
      console.log('Quiz finished');
      return;
    }

    this.currentIndex.update(v => v + 1);

    // reset state
    this.selectedAnswer = null;
    this.isLocked = false;
  }

  // ======================
  // RESET (optional)
  // ======================
  resetQuiz() {
    this.currentIndex.set(0);
    this.selectedAnswer = null;
    this.isLocked = false;
    this.getRandomQuestion(this.allTest);
  }
}