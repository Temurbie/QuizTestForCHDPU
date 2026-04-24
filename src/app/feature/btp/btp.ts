import { Component } from '@angular/core';
import { DATATEST } from '../../data/testData';
import { WrapperTest } from "../../share/component/wrapper-test/wrapper-test";

@Component({
  selector: 'app-btp',
  imports: [WrapperTest],
  templateUrl: './btp.html',
  styleUrl: './btp.css',
})
export class BTP {
   data = DATATEST;
    sendData = this.data.slice(0, 100)
}
