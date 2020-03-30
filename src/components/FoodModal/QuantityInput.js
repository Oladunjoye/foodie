import React from 'react'
import styled from 'styled-components'
import { Title } from '../../Styles/Title'


const QuantityInputStyled = styled.input.attrs({
   
})`
font-size: 18px;
text-align: center;
width: 40px;
border: none;
outline: none;


`
const IncrementContainer = styled(Title)`
height: 24px;
display: flex;

`

const IncrementButton =  styled.div`
width: 23px;
color: red;
font-size: 20px;
text-align: center;
cursor: pointer;
line-height: 23px;
margin: 0px 10px;
border: 1px solid red;
${({disabled}) =>  disabled &&

`opacity: 0.5;
pointer-events: none;



`
}
&:hover{
    background-color: #ffe3e3;
}
`
export default function QuantityInput({quantity}) {
    return (
        <IncrementContainer>
            <div>   Quantity : </div>
          
            <IncrementButton onClick= {() => quantity.setValue(quantity.value - 1)} disabled ={quantity.value < 2}> - </IncrementButton>
            <QuantityInputStyled {...quantity}/>
            <IncrementButton onClick= {() => quantity.setValue(quantity.value + 1)}  disabled ={quantity.value >= 10}> + </IncrementButton>

       
        </IncrementContainer>
    )
}
