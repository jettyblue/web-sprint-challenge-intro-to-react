// Write your Character component here
import React, { useState} from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { info } = props;
    return (
        <p>{info}</p>
    )
}

export default Character;
