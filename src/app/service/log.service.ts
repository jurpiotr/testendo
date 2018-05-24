import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }
  logger(log: string) {
    console.log(log);
  }
}
