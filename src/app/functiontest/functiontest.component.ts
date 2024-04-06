import { Component } from '@angular/core';
import { log } from 'console';


@Component({
  selector: 'app-functiontest',
  templateUrl: './functiontest.component.html',
  styleUrl: './functiontest.component.css'
})

export class FunctiontestComponent {
  value: any = 0;
  ngOnInit(): void {

  }

  plushValue(value: any) {
    this.value = this.value + value;
    console.log("Value", value);
  }

  minusValue(value: any) {
    this.value = this.value - value;
    console.log("Value", value);
  }

}
