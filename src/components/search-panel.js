import React, {Component} from 'react';
import { Input, InputGroup, InputGroupAddon, Button, ButtonGroup } from 'reactstrap';


export default class SearchPanel extends Component {
    state = {
        term: '',
    }

    onChange = (e) => {
        this.setState({
            term: e.target.value
        });
        this.props.onSearchUpdate(e.target.value);
    };

    onBtnClicked = (e) => {
        switch (e.target.innerText.toLowerCase()) {
            case 'active':
                this.props.onFilterUpdate('active');
                break;
            case 'done':
                this.props.onFilterUpdate('done');
                break;
            default:
                this.props.onFilterUpdate('all');
        }
    };

    render() {
        return (
            <InputGroup className='mt-3'>
                <Input 
                    placeholder='type smth to search'
                    value={this.state.term}
                    onChange={this.onChange}/>
                <InputGroupAddon addonType="append" onClick={this.onBtnClicked}>
                    <ButtonGroup>
                        <Button outline>All</Button>
                        <Button outline>Active</Button>
                        <Button outline>Done</Button>
                    </ButtonGroup>
                </InputGroupAddon>
            </InputGroup>
        );
    };
};

