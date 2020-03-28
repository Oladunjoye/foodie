import React from 'react'
import styled from 'styled-components'
import {FoodGrid, Food, FoodLabel} from './FoodGrid'
import {foodItems} from '../../Data/FoodData'
// import {Title} from '../../Styles/Title' 

const MenuStyled =  styled.section`

width: 70%;
padding: 10px;

`
export default function Menu() {
    return (
       <MenuStyled>
           <h1>Menu</h1>
           <FoodGrid>
        {foodItems.map((food) => {
           return ( 
           <Food img = {food.img}>
               <FoodLabel> {food.name} </FoodLabel>
            </Food>
           )
        })}

           </FoodGrid>
       </MenuStyled>
    )
}
