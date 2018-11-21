import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface Question {
  _id?: string;
  question: string;
  difficulty: number;
  options: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  animal: string;
  correct_answer: number;
  date_entered: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<Question[]>('https://practiceapi.devmountain.com/api/trivia/questions')
  }
  deletePost(id){
    return this.http.delete<Question[]>('https://practiceapi.devmountain.com/api/trivia/questions/'+id)
  }
}
