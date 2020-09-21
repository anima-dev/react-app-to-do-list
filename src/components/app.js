import React, {Component} from 'react';
import ToDoList from './todo-list';
import SearchPanel from './search-panel';
import AppHeader from './app-header';
import { Container } from 'reactstrap';
import TaskInput from './task-input';

export default class App extends Component {
    state = {
        data: [
            {id: 1, important: true, label: 'Drink coffee', done: false},
            {id: 2, important: false, label: 'Walk', done: false},
            {id: 3, important: false, label: 'Sing', done: true},
            {id: 4, important: false, label: 'Dance', done: false},
            {id: 5, important: true, label: 'Code', done: false}
        ]
    }

    onToggleProps = (id, propName) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const newArr = [
                ...data.slice(0, index),
                {...data[index], [propName]: !data[index][propName]},
                ...data.slice(index + 1)
            ]
            return {
                data: newArr
            }
        })
    }

    onDeleted = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const newArr = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ]
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <Container>
                <AppHeader data={this.state.data}/>
                <SearchPanel/>
                <ToDoList data={this.state.data} onToggleProps={this.onToggleProps} onDeleted={this.onDeleted}/>
                <TaskInput/>
            </Container>
        );
    }
};

