import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TasksService) {

  }

  ngOnInit() {
  }
  add() {
    const task: Task = { name: this.newTask, created: new Date()};
    this.tasksService.add(task);
    this.newTask = '';
  }
}