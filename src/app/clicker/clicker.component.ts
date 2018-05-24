import { ClickService } from './../service/click.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css']
})
export class ClickerComponent implements OnInit {

  countClicks = 0;
  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }
  add(): void {
    this.countClicks += 1;
    this.clickService.addClicks();
    console.log(this.clickService);
  }
}
