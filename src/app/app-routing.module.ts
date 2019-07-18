import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from './student-list/student-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '',  redirectTo: '/quiz-list', pathMatch: 'full' },
  { path: 'new-quiz', component: NewQuizComponent, data: {animation: 'AboutPage'} },
  { path: 'quiz-list', component: QuizListComponent, data: {animation: 'HomePage'} },
  { path: 'student-list', component: StudentListComponent, data: { animation: 'FilterPage' } },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
