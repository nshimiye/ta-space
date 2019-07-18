import { Component, OnInit, ApplicationRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {

  @ViewChild('portalContent', { static: false }) content: TemplateRef<any>
  constructor() { }


  extendDeadline() {
    debugger
  }
  autoGrade(){
    debugger
  }
}
