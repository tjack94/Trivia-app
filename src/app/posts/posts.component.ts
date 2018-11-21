import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PostsService, Question} from '../posts.service'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 @Input()
  posts = [] as Question[];
  pipe = null;
  difficulty = 0;
  displaySearch = false
  @Input()
  search = ''
  @Output()
  edit = new EventEmitter()
  constructor(private postsService: PostsService) { }

  filterDifficulty(number){
    this.difficulty = number
  }
  showHideSearch(){
    if(this.displaySearch){
      this.displaySearch = false
    } else{
      this.displaySearch = true
    }
  }
  reset(){
    this.search = ''
    this.difficulty= 0
  }
  editQuestion(post){
this.edit.emit(post)
console.log(post)
  }
  ngOnInit() {
    this.postsService.getPosts()
    .subscribe((response) =>{
      console.log(response)
      this.posts = response
    })
  }
 
}
