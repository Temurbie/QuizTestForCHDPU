import { Component } from '@angular/core';
import { WrapperTest } from "../../share/component/wrapper-test/wrapper-test";
import { DATATEST } from '../../data/testData';

@Component({
  selector: 'app-ot',
  imports: [WrapperTest],
  templateUrl: './ot.html',
  styleUrl: './ot.css',
})
export class OT {

     data = DATATEST;
     sendData = this.data.slice(206, 303)
}
