import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';


const TaskInput = () => {
    return (
        <InputGroup className='mt-3'>
            <Input placeholder='What needs to be done?'/>
            <InputGroupAddon addonType="append">
                <Button>Add</Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default TaskInput;