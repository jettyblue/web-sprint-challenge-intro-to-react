// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDesc = styled.div`
    color: white;
    border: 3px solid #443E3E;
    border-radius: 8px;
    max-width: 30%;
    display: flex;
    margin: 1% auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;

    &:hover {
        border: 6px solid #CA7D01;
    }
`

const Character = (props) => {
    const { info } = props;
    return (
        <CharacterDesc>
            <h2>{info.name}</h2>
            <p> &#127874;
                DOB: {info.birth_year} <br></br>
                &#9892;
                Gender: {info.gender} <br></br>
                &#128065;&#65039;&#8205;&#128488;&#65039;
                Eyes: {info.eye_color} <br></br>
                &#128113;&#127996;&#8205;&#9794;&#65039;
                Hair: {info.hair_color}
            </p>
        </CharacterDesc>
    )
}

export default Character;
