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
        ],
        searchTerm: '',
        filterTerm: 'all'
    };

    maxId = 6;

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
    };

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
    };

    onItemAdded = (text) => {
        const newItem = {
            id: this.maxId++, 
            important: false, 
            label: text, 
            done: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    };

    onSearchUpdate = (searchTerm) => {
        this.setState({searchTerm});
    };

    onFilterUpdate = (filterTerm) => {
        this.setState({filterTerm});
    };

    filterItems = (filter, data) => {
        switch (filter) {
            case 'active':
                return data.filter(item => !item.done);
            case 'done':
                return data.filter(item => item.done);
            default: 
                return data;
        }

    };

    searchItems = (search, data) => {
        if (!search) {
            return data;
        }

        return data.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
    };

    render() {
        const {data, filterTerm, searchTerm} = this.state;
        const itemsList = this.searchItems(searchTerm, (this.filterItems(filterTerm, data)));

        return (
            <Container>
                <AppHeader data={this.state.data}/>
                <SearchPanel onSearchUpdate={this.onSearchUpdate} onFilterUpdate={this.onFilterUpdate}/>
                <ToDoList data={itemsList} onToggleProps={this.onToggleProps} onDeleted={this.onDeleted}/>
                <TaskInput onItemAdded={this.onItemAdded}/>
            </Container>
        );
    }
};

