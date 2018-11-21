import { Pipe, PipeTransform } from '@angular/core';
import { Question } from './posts.service';


@Pipe({
  name: 'filterPosts'
})
export class FilterPostsPipe implements PipeTransform {

  transform(value: Question[], difficultyId: number, query: string): any {
    query = query.toLowerCase();
    return value
      .filter(question => {
        return (question.difficulty == difficultyId || difficultyId == 0) &&
          (!query ||
            question.question.toLowerCase().includes(query) ||
            question.animal.toLowerCase().includes(query) ||
            Object.values(question.options).some(val => val.toLowerCase().includes(query))
          );
      });
  }

}
