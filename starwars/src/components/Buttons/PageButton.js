import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: rgba(255, 255, 255, .9);
    padding: 10px 15px;
    margin: 20px;
    border: none;
    &:hover {
        background: gray;
        color: white;
    }
`;

const PageButton = (props) => {
    return (
        <StyledButton onClick={() => props.changePage(props.value)}>{props.value}</StyledButton>
    )
}

export default PageButton;