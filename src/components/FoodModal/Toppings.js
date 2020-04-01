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

export default function Toppings({toppings, checkTopping}) {
    return (
        <ToppingsGrid>
            {
                toppings.map((topping, index) => {
                    return(
                        <InputLabel>
                        <ToppingsInput type= "checkbox" checked = {topping.checked} onClick = {() =>checkTopping(index)} />
                        {topping.name}
            
                        </InputLabel>
                    )
                })
            }
           

        </ToppingsGrid>
    )
}
