import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

const SearchPanel = () => {
    return (
        <InputGroup className='mt-3'>
            <Input placeholder='search'/>
            <InputGroupAddon addonType="append">
                <Button>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default SearchPanel;