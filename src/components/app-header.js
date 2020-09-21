import React from 'react';
import StatusBar from './status-bar';

const AppHeader = ({data}) => {
    return (
        <div className="d-flex justify-content-between mt-3">
            <h1>My ToDo List</h1>
            <StatusBar data={data} />
        </div>
    );
};

export default AppHeader;