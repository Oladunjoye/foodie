import React from 'react'
import styled from 'styled-components'
import { Title } from '../../Styles/Title'


const QuantityInputStyled = styled.input.attrs({
    type: 'number',
    min: 0,

    max: 10

})`
font-size: 18px;
text-align: center;
width: 40px;
border: none;
outline: none;


`
const IncrementContainer = styled(Title)`
height: 24px
display: flex;

`
export default function QuantityInput({quantity}) {
    return (
        <IncrementContainer>
            <div>
            Quantity : 
            </div>
            <QuantityInputStyled {...quantity}></QuantityInputStyled>
       
        </IncrementContainer>
    )
}
