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
height: 24px;
display: flex;

`

const IcrementButton =  styled.div`
width: 23px;
color: red;
text-align: center;
cursor: pointer;
line-height: 23px;
margin: 0px 10px;
border: 1px solid red;
${({disabled}) =>  disabled &&

`opacity: 0.5;
pointer-events: none;

&:hover{
    background-color: #ffe3e3;
}

`
}
`
export default function QuantityInput({quantity}) {
    return (
        <IncrementContainer>
            <div>   Quantity : </div>
          
            
            <QuantityInputStyled {...quantity}/>
       
        </IncrementContainer>
    )
}
