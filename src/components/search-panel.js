import React, {Component} from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

export default class SearchPanel extends Component {
    state = {
        term: '',
    }

    filterButtons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

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
        const buttons = this.filterButtons.map(button => {
            const isActive = button.name === this.props.filter;
            const outline = isActive ? false : true;
    
            return (
                <Button outline={outline}>
                    {button.label}
                </Button>
            )
        });

        return (
            <InputGroup className='mt-3'>
                <Input 
                    placeholder='type smth to search'
                    value={this.state.term}
                    onChange={this.onChange}/>
                <InputGroupAddon addonType="append" onClick={this.onBtnClicked}>
                        {buttons}
                </InputGroupAddon>
            </InputGroup>
        );
    };
};

