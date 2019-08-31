import React from 'react';
import CharTitle from './CharTitle';
import CharBirth from './CharBirth';
import CharHeight from './CharHeight';

import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 2px solid black;
    padding: 10px;
    width: 30%;
    background: rgba(255, 255, 255, .6);
    margin: 15px;
    
`;

const Character = (props) => {
    return (
        <StyledDiv>
            <CharTitle name={props.name} />
            <CharBirth birthYear={props.birthYear} />
            <CharHeight height={props.height} />
        </StyledDiv>
    )
}

export default Character;