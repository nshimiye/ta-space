import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { StudentListComponent } from './student-list/student-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { PortalDirective } from './portal.directive';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuizComponent,
    StudentListComponent,
    QuizListComponent,
    PortalDirective,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
