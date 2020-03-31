import React from 'react'
import styled from 'styled-components'

const ToppingsGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

const ToppingsInput = styled.input`
margin-right: 10px;

`

const InputLabel = styled.label`

cursor: pointer;
`

export default function Toppings() {
    return (
        <ToppingsGrid>
            <InputLabel>
            <ToppingsInput type= "checkbox" onClick = {()=> alert('Hey')} />
            </InputLabel>

        </ToppingsGrid>
    )
}
