import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';
 

  list: Todo [] = [
    {task: 'Take out the trash', completed: false},
    {task: 'Wash the dishes', completed: false},
    {task: 'Vacuum', completed: false},
    {task: 'Stretch', completed: true},
    {task: 'Eat breakfast', completed: true},
    {task: 'Workout', completed: false},
    {task: 'Finish MVP', completed: false},
    {task: 'Cook Dinner', completed: true},


  ];
  // CompleteTask = function() {
      
  //     this.list.task.completed == true;

         
  //     //this.list.task.completed = true;
  //     // let q = document.getElementById('task')
  //     // q.id = 'done';
      
    
    
  // }

  AddToDo = function(newtodo: string) {
      if(newtodo) {
        this.list.push({task:newtodo, completed: false})
      }
  }

}

interface Todo {
  task : String,
  completed : Boolean;
};


