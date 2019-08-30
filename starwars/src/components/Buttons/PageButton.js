import React from 'react';

const PageButton = (props) => {
    return (
        <button onClick={() => console.log('hi')}>{props.value}</button>
    )
}

export default PageButton;