import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input()
  post = null
  difficulty = null
  answer = null

  @Output()
  edit= new EventEmitter()
  constructor() { }

  selectAnswer(answer){
    if(this.post.correct_answer == answer){
      this.answer = "correct"
    }else{
      this.answer = "incorrect"
    }
    
  }
editQuestion(post){
  this.edit.emit(post)
  

}
  ngOnInit() {
    if(this.post){
      switch(this.post.difficulty){
        case 1:
        return this.difficulty = "easy"
        case 2: 
        return this.difficulty= "medium"
        case 3: this.difficulty= 'hard'
      }
    }
  }

}
