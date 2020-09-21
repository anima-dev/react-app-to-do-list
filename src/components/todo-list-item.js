import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import './todo-list-item.css';



const ToDoListItem = ({important, label, done}) => {
    let classList = "d-flex justify-content-between";
    let outline = true;

    if (important) {
        classList += " font-weight-bold";
        outline = false;
    }

    if (done) {
        classList += " item_done";
    }

    return (
        <div className={classList}>
            <span >{label}</span>
            <div>
                <Button 
                data-trash
                outline  
                color="danger" 
                className="mr-3">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button 
                data-important
                outline={outline}  
                color="success">
                    <FontAwesomeIcon icon={faExclamation} />
                </Button>
            </div>
        </div>
    );
};

export default ToDoListItem;