import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../service/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-tdone',
  templateUrl: './tdone.component.html',
  styleUrls: ['./tdone.component.css']
})
export class TdoneComponent implements OnInit {


  tasksDone: Array<Task> = [];
  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {
  }


}
