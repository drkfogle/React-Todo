import React from 'react';
import TodoList from './TodoList';


class Todo extends React.Component {
    constructor () {
    super();
        this.state = {
        TodoList: TodoList,
        task: '',
        id: '',
        completed: '',
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
                completed: ''
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
                    <h1>To Do List</h1>
                    <div>
                    {this.state.TodoList.map(maplist => (
                        <TodoList key = {maplist.task} student ={maplist}/>
                    ))}
                    </div>


                    <form>
                        <input
                            task='text'
                            id = {this.state.id}
                            onChange = {this.handleChanges}
                        />
                        <input
                            task='text'
                            id = {this.state.id}
                            onChange = {this.handleChanges}
                        />
                        <input
                            task='text'
                            id = {this.state.id}
                            onChange = {this.handleChanges}
                        />
                        <button onClick={this.addTask}>Add Task</button>
                    </form>
                </div>
            )
        }
        
    }

export default Todo
