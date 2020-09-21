import React from 'react';

const StatusBar = ({data}) => {
    const toDo = data.filter(item => item.done === false).length;
    const done = data.filter(item => item.done === true).length;
    return (
        <div>{toDo} more to do, {done} done</div>
    )
}

export default StatusBar;