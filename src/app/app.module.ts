import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { HeaderComponent } from './header/header.component';
import { AddNewQuestionComponent } from './add-new-question/add-new-question.component';
import { FormsModule } from '@angular/forms';
import { FilterPostsPipe } from './filterPosts.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule, MatButtonModule, MatCardModule } from '@angular/material';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';
import { ObjectValuesPipe } from './object-values.pipe';
import { ObjectKeysPipe } from './object-keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostCardComponent,
    HeaderComponent,
    AddNewQuestionComponent,
    FilterPostsPipe,
    AddPostDialogComponent,
    ObjectValuesPipe,
    ObjectKeysPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  entryComponents: [
    AddPostDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
