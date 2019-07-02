import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs'; // Adds functionality to observables

// Api service is used to fetch data from the EntityFramework (the back-end).
@Injectable()
export class ApiService {

    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();
    constructor(private http: HttpClient) {

    }

    getQuestions(){
        return this.http.get('http://localhost:63100/api/questions');
    }

    postQuestion(question){
        this.http.post('http://localhost:63100/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }

    putQuestion(question) {
        this.http.put(`http://localhost:63100/api/questions/${question.id}`, question).subscribe(res => {
            console.log(res);
        }) 
    }

    selectQuestion(question) {
        this.selectedQuestion.next(question);
    }
}