// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { info } = props;
    return (
        <div>
            <h2>{info.name}</h2>
            <p>Birth date: {info.birth_year}</p>
            <p> Gender: {info.gender} -- 
                Eyes: {info.eye_color} -- 
                Hair: {info.hair_color}
            </p>
        </div>
    )
}

export default Character;
