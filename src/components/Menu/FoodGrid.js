import styled from 'styled-components'
import {Title} from '../../Styles/Title'

export const FoodWrapper = styled.div`

margin: 30px 0;
`

export const FoodGrid = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
`

export const FoodLabel = styled.div`
position: absolute;
padding: 5px;
background-color: white;
`
export const Food = styled(Title)`
height: 200px;
padding: 10px;
margin-bottom:10px;
background-image: ${({img}) => img ? `url(${img});` :  `url('/Images/default-pizza.jpg');`  }
background-position: center;
background-size: cover;
filter: contrast(65%);
transition-property:  box-shadow filter margin-top;
transition-duration:0.4s;
border-radius: 7px;
box-shadow: 0px 0px 10px 0px grey;
cursor: pointer;
margin-top: 5px;
&:hover{
    opacity:.8;
box-shadow: 0px 0px 10px 0px grey;
filter: contrast(85%);
margin-top: 0px;
margin-bottom: 15px;



}

`