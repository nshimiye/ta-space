import { Component, OnInit, ApplicationRef, ViewContainerRef, ViewChild, TemplateRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent {

  constructor() { }

  createQuiz(e) {
    e.preventDefault();
    debugger
  }
}
