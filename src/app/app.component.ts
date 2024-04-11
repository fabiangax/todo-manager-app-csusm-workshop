import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDoManagerApp';
  newTask!: Task;
  tasks: Array<Task> = [];

  constructor() {
    this.newTask = { title: '', description: '', deadline: '', status: 'uncompleted' };
  }

  addTask() {
    console.log(this.newTask);
    this.tasks.push(this.newTask);
    console.log(this.tasks);
    this.newTask = { title: '', description: '', deadline: '', status: 'uncompleted' };
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  completeTask(task: Task) {
    task.status = 'completed';
  }

  uncompleteTask(task: Task) {
    task.status = 'uncompleted';
  }
}
