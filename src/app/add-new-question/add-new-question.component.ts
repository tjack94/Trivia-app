import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AddQuestionService } from '../add-question.service';
import { Question, PostsService } from '../posts.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit, OnChanges {
  @Input()
  question = {
    question: null,
    animal: null,
    difficulty: 2,
    options: {
      1: null,
      2: null,
      3: null,
      4: null,
      
    },
    correct_answer: null,
    date_entered: (new Date())
  } as Question;  
  @Output()
  hideForm = new EventEmitter()

  constructor(private addQuestionService: AddQuestionService, private postsService: PostsService) { }

  addQuestion(){
    let postUpdate: Observable<Question[]>;

    if(this.question._id){
      postUpdate = this.addQuestionService.updatePost(this.question);
    }
    else {
      postUpdate = this.addQuestionService.addPost(this.question);
    }
    postUpdate
      .subscribe((response: Question[])=>{
        this.hideForm.emit(response);
      });
  }

  ngOnInit() {
    if (!this.question) {
      this.question = {
        question: null,
        animal: null,
        difficulty: 2,
        options: {
          1: null,
          2: null,
          3: null,
          4: null,
          
        },
        correct_answer: null,
        date_entered: (new Date())
      };
    }
  }

  ngOnChanges(changeObject) {
    if (changeObject.question && !changeObject.question.currentValue) {
      this.question = {
        question: null,
        animal: null,
        difficulty: 2,
        options: {
          1: null,
          2: null,
          3: null,
          4: null,
          
        },
        correct_answer: null,
        date_entered: (new Date())
      };
    }
  }
deleteQuestion(id){
  this.postsService.deletePost(id)
  .subscribe(() =>{
    this.hideForm.emit(id);
  })
}
}
