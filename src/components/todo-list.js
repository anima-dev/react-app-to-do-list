import React from 'react';
import { ListGroup } from 'reactstrap';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
    return (
        <ListGroup className="list-group-flush mt-3">
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
        </ListGroup>
    );
};

export default ToDoList;