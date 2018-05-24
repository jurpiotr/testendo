import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';


@Injectable()
export class TasksService {

  private tasksList: Array<Task> = [];
  private taskDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [
      {name: 'zadanie 1', created: new Date() },
      {name: 'zadanie 2',  created: new Date() },
      {name: 'nauka', created: new Date() }
    ];
    this.tasksListObs.next(this.tasksList);
   }

  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }
  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);
  }
  done(task: Task) {
    this.taskDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.taskDone);
  }
  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }
}
