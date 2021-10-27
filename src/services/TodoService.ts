import { map, Subject, throttleTime,  } from 'rxjs'
import { reactive } from 'vue'

export interface Todo {
  title: string,
  stats: boolean,
  deleted: boolean
}

export enum ActionName {
  ADD = "ADD",
  DELETE = "DELETE",
  UPDATE = "UPDATE"
}

export interface Action<T> {
  name: ActionName,
  payload: T
}


export class TodoService {

  // public list = reactive<Todo[]>([])
  private list: Todo[] = [];

  private $todo = new Subject<Todo[]>()

  private findTodoIndex (todo: Todo) {
    return this.list.findIndex(item => item.title === todo.title)
  }

  public action (name: ActionName, payload?: Todo) {
    switch (name) {
      case ActionName.ADD:
        if (payload) {
          this.list.push(payload)
        }
        break;
      case ActionName.DELETE:
        if (payload) {
          const index = this.findTodoIndex(payload)
          this.list.splice(index, 1)
        }
        break;
      case ActionName.UPDATE:
        break;
      default:
        break;
    }
    this.dispath()
  }

  private dispath () {
    this.$todo.next([...this.list])
  }

  public subscribeTodo (callback: (value: Todo[]) => void) {
    return this.$todo.subscribe(callback)
  }
}