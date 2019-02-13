// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {
    constructor () {
    super();
        // {this.state.Todolist.map(Todolist =>(
        //     <TodoList key = {task} task ={mappedList} />
        // ))
        // }
    }
    render(){
        return(
            <div>
            {this.props.longLiveGlorp.map((item, index) =>
                <p>{item.task}
                </p>
                )}
            </div>
        );
    }
}


export default TodoList