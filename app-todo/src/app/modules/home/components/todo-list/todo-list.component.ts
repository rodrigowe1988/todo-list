import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    {task: 'My new task 1', checked: true},
    {task: 'My new task 2', checked: false},
    {task: 'My new task 3', checked: false},
  ];
  constructor() {}

  ngOnInit(): void {}
}
