import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { Question, PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionService {

  constructor(private http: HttpClient, private postService: PostsService) { }
  addPost(post){
    return this.http.post<Question[]>('https://practiceapi.devmountain.com/api/trivia/questions', post)
      .pipe(
        map(posts => posts.filter(q => q.options)),
      );
  }
  updatePost(post: Question){
    return this.http.put('https://practiceapi.devmountain.com/api/trivia/questions/'+ post._id, post)
      .pipe(
        switchMap(() => this.postService.getPosts()),
      );
  }
}
