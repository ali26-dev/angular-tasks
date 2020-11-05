import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Task[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('TaskService: fetched heroes');
    return of(TASKS);
  }
}