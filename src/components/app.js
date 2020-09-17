import React from 'react';
import ToDoList from './todo-list';
import SearchPanel from './search-panel';
import AppHeader from './app-header';
import { Container } from 'reactstrap';

const App = () => {
    return (
        <Container>
            <AppHeader />
            <SearchPanel/>
            <ToDoList />
        </Container>
    );
};

export default App;