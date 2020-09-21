import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ToDoListItem from './todo-list-item';

const ToDoList = ({data, onToggleProps, onDeleted}) => {

    const toDoItems = data.map(item => {
        const {id, ...itemProps} = item;

        const eventHandler = (e) => {
            e.preventDefault();
            if (e.target && e.target.closest('button[data-important]')) {
                onToggleProps(id, 'important');
            } else if (e.target && e.target.closest('button[data-trash]')) {
                onDeleted(id);
            } else {
                onToggleProps(id, 'done');
            }
        }

        return (
            <ListGroupItem key={id} onClick={(e) => eventHandler(e)}>
                <ToDoListItem {...itemProps}  />
            </ListGroupItem>
        )
    })

    return (
        <ListGroup className="list-group-flush mt-3">
            {toDoItems}
        </ListGroup>
    );
};

export default ToDoList;