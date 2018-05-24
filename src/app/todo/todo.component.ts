import { Component, OnInit, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  tasksList: Array<Task> = [];


  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.slice();
    });
  }

    ngOnInit() {
    }
  remove(task: Task ) {
    this.tasksService.remove(task);
  }
  done(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);
  }
  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
