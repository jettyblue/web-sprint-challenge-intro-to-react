// Write your Character component here
import React, { useState} from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { info } = props;
    return (
        <h2>{info.name}</h2>
    )
}

export default Character;
