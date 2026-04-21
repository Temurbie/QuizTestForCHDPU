import { Component, computed, OnInit, signal } from '@angular/core';
import { DATATEST, ITest } from '../../data/testData';

@Component({
  selector: 'app-test-component',
  imports: [],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent implements OnInit {
  currentIndex = signal<number>(0);
  allRandomTest = signal<ITest[]>([])
  allTest = DATATEST;

  currentTest = computed(() => this.allRandomTest()[this.currentIndex()] || null)

  getRandomQuetion(allQuation: ITest[]){
    const shuffled = [...allQuation].sort(() => 0.5 - Math.random());
    const data = shuffled.slice(0,30);
    this.allRandomTest.set(data)
  }
  nextQuetion(){
    
    if(this.currentIndex() < 29 ){
      this.currentIndex.update(v => v +1)
    }
  }

  ngOnInit(): void {
    this.getRandomQuetion(this.allTest)
    console.log(this.currentTest());
    this.nextQuetion()
  }
}
