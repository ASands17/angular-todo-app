import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[]
  showValidationErrors!: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm) {
    console.log("FORM SUBMITTED")
    console.log(form)

    if (form.invalid) return this.showValidationErrors = true;

    this.dataService.addTodo(new Todo(form.value.text))

    this.showValidationErrors = false
    return form.reset()

    
  }

}
