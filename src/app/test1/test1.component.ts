import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

    @Input() 
    write;

    @Output()
    goNow = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  have(key){
    this.goNow.emit(key);
  }

}
