import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        let classes = 'todo';
        if (todo.completed) {
          classes += ' completed';
        }
        return (
          <li className={classes} key={todo.id}>
            <label>
              <input
                type="checkbox"
                onChange={() => onToggle(todo.id)}
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
