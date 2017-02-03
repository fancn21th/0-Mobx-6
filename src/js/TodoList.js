import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class TodoList extends React.Component {
    filter(e){
        this.props.store.filter = e.target.value
    }

    createTodo(e){
        if(e.which === 13){
            this.props.store.createTodo(e.target.value)
            e.target.value = ''
        }
    }

    render(){
        const { filteredTodos, todos } = this.props.store;
        const todoList = filteredTodos.map( todo => (<li> {todo} </li>));

        return <div>
            <h1>TODO List</h1>
            create a new todo : <input onKeyPress={this.createTodo.bind(this)}/> <br/>
            filter todo list by :<input onChange={this.filter.bind(this)}/>
            <ul>{todoList}</ul>
        </div>
    }
}