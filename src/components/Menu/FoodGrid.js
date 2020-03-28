import styled from 'styled-components'
import {Title} from '../../Styles/Title'


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
background-image: ${({img}) => img ? `url(${img});` :  `url('/Images/default-pizza.jpg');`  }
background-position: center;
background-size: cover;
filter: contrast(65%);
border-radius: 7px;
box-shadow: 0px 0px 10px 0px grey;
cursor: pointer;
&:hover{
    opacity:.8

}

`