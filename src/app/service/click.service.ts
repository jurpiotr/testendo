import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { LogService } from './log.service';

@Injectable()
export class ClickService {
  private sumClicks = 0;
  private sum = new Subject<number>();
  constructor(private log: LogService) { }
  addClicks() {
    this.sumClicks += 1;
    this.sum.next(this.sumClicks);
    this.log.logger('klikniecie');
  }
  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
