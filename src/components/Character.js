// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const CharacterDesc = styled.div`
    color: white;
    border: 3px solid #443E3E;
    max-width: 53%;
    display: flex;
    margin: 1% auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 1%;
`

const Character = (props) => {
    const { info } = props;
    return (
        <CharacterDesc>
            <h2>{info.name}</h2>
            &#9187;
            <p>Birth date: {info.birth_year}</p>
            &#9187;
            <p> &#9892;
                Gender: {info.gender} <br></br>
                &#128065;&#65039;&#8205;&#128488;&#65039;
                Eyes: {info.eye_color} <br></br>
                &#129459;
                Hair: {info.hair_color}
            </p>
        </CharacterDesc>
    )
}

export default Character;
