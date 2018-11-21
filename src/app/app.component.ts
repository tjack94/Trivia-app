import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { Question } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayForm = false
  posts = [] as Question[];
  question = null

  constructor(private dialog: MatDialog){
  }
  showHideForm(){
    const dialogRef = this.dialog.open(AddPostDialogComponent);

    dialogRef.afterClosed()
      .subscribe(result =>{
        if (result) this.posts = result;
      });
  }
  editQuestion(question){
    this.question = question
    const dialogRef = this.dialog.open(AddPostDialogComponent, {data: {question}});

    dialogRef.afterClosed()
    .subscribe(result =>{
      if (Array.isArray(result)) this.posts = result;
      if (typeof result == 'string') this.posts = this.posts.filter(p => p._id != result);
    });
  }
}
