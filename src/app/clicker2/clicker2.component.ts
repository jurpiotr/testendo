import { Component, OnInit } from '@angular/core';
import { ClickService } from '../service/click.service';

@Component({
  selector: 'app-clicker2',
  templateUrl: './clicker2.component.html',
  styleUrls: ['./clicker2.component.css']
})
export class Clicker2Component implements OnInit {
  countClicks2 = 0;
  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }
  add(): void {
    this.countClicks2 += 1;
    this.clickService.addClicks();
    console.log(this.clickService);
  }
}
