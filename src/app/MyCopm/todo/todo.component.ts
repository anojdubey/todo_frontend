import { Component } from '@angular/core'
import { Todo } from './Todo'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos: Todo[]
  constructor(public http: HttpClient) {
    this.todos = []
    this.getTodo()
  }
  getTodo = () => {
    return this.http
      .get<Todo>('https://angular-todo.onrender.com')
      .subscribe((res: any) => {
        this.todos = res.todos
        console.log(this.todos[0]._id)
      })
  }
  deleteTodo = (todo: Todo) => {
    const index = this.todos.indexOf(todo)
    const id = todo._id
    return this.http
      .delete(`https://angular-todo.onrender.com/deletetodo/${id}`)
      .subscribe(() => {
        alert('Todo Deleted')
        this.getTodo()
      })
  }
  editTodo = (todo: Todo) => {
    return this.http
      .put(`https://angular-todo.onrender.com/edit`, todo)
      .subscribe(() => {
        alert('Todo Edited')
        this.getTodo()
      })
  }
  todoAdd = async (todo: Todo) => {
    console.log('Add todo', todo)
    return this.http.post('https://angular-todo.onrender.com', todo).subscribe((res) => {
      this.getTodo()
      alert('Todo Added')
    })
  }
  checkTodo = (todo: Todo) => {
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
