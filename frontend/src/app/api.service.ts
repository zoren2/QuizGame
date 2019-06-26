import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Api service is used to fetch data from the EntityFramework (the back-end).
@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {

    }
    getQuestions(){
        return this.http.get('https://localhost:44324/api/questions');
    }
    postQuestion(question){
        this.http.post('https://localhost:44324/api/questions', question).subscribe(res => {
            console.log(res);
        })
    }
}