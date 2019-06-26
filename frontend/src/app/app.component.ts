import { Component } from '@angular/core';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';

@Component({
  selector: 'app-root',
  template: '<question></question><questions><questions>'
})
export class AppComponent {
  title = 'my app';
}
