import { Component } from '@angular/core';
import { WrapperTest } from "../../share/component/wrapper-test/wrapper-test";
import { DATATEST } from '../../data/testData';

@Component({
  selector: 'app-om',
  imports: [WrapperTest],
  templateUrl: './om.html',
  styleUrl: './om.css',
})
export class Om {

    data = DATATEST;
       sendData = this.data.slice(303)
}
