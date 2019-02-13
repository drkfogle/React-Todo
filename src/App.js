import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const List = [
  {
      task : 'wash laundry',
      id:'1',
      completed: 'false'
  },
  {
      task: 'wash dog',
      id:'2',
      completed: 'false'
  },
  {
      task: 'dry dog',
      id:'3',
      completed: 'false'
  },
  {
      task: 'cook',
      id: '4',
      completed: 'false'
  
  }
  ]

  class App extends React.Component {
    constructor () {
    super();
        this.state = {
        TodoList: List,
        task: '',
        id: '',
        completed: false,
            };
        };

        addTask = e => {
            e.preventDefault();
            console.log(e.target);

            const newTask = {
            task: this.state.task,
            id: this.state.id,
            completed: this.state.completed
            };
            this.setState({
                TodoList: [...this.state.TodoList, newTask],
                task: '',
                id: '',
                completed: false
            });
        };

        handleChanges = e => {
            console.log(e.target.value);
            this.setState({
                [e.target.task]: e.target.value
            });
        };
    



        render() {
            return (
              <div>
              <TodoList longLiveGlorp={this.state.TodoList}/>
              <TodoForm/>
              </div>
            );         
  }
}

export default App;
