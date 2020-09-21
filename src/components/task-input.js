import React, {Component} from 'react';
import { Form, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';


export default class TaskInput extends Component {
    state = {
        label: ''
    }

    onChange = (e) => {
        this.setState({
            label: e.target.value
        })
        console.log(this.state.label)
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.label !== '') {
            this.props.onItemAdded(this.state.label)
            this.setState({label: ''})
        }
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <InputGroup className='mt-3'>
                    <Input 
                        placeholder='What needs to be done?'
                        value={this.state.label}
                        onChange={this.onChange}/>
                    <InputGroupAddon addonType="append">
                        <Button>Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        );
    }
};
