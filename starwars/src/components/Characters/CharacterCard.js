import React from 'react';
import Character from './Character';

import styled from 'styled-components';

const WrapperDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const CharacterCard = (props) => {
    return (
        <WrapperDiv>
           {props.chars.map((item, index) => {
               return <Character key={index} name={item.name} birthYear={item.birth_year} height={item.height} />
           })}
        </WrapperDiv>
    )
};

export default CharacterCard;