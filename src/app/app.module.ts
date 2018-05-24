import { TasksService } from './service/tasks.service';
import { LogService } from './service/log.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from './service/http.service';

import { Test1Component } from './test1/test1.component';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoComponent } from './todo/todo.component';
import { TdoneComponent } from './tdone/tdone.component';
import { ClickerComponent } from './clicker/clicker.component';
import { Clicker2Component } from './clicker2/clicker2.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    ListComponent,
    AddTaskComponent,
    TodoComponent,
    TdoneComponent,
    ClickerComponent,
    Clicker2Component,
    CheckedDirective,
    DateDirective,
    TransformTaskPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService, TasksService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
