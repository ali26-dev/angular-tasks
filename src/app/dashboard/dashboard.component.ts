import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Task[] = [];

  constructor(private heroService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getHeroes(): void {
    this.heroService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(1, 5));
  }
}