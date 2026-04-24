import { Component } from '@angular/core';
import { WrapperTest } from "../../share/component/wrapper-test/wrapper-test";
import { DATATEST } from '../../data/testData';

@Component({
  selector: 'app-mum',
  imports: [WrapperTest],
  templateUrl: './mum.html',
  styleUrl: './mum.css',
})
export class MUM {
   data = DATATEST;
   sendData = this.data.slice(100, 206)
}
