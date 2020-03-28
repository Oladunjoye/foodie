import React from 'react'
import styled from 'styled-components'
import {FoodGrid, Food, FoodLabel, FoodWrapper} from './FoodGrid'
import {foodItems, foods} from '../../Data/FoodData'
// import {Title} from '../../Styles/Title' 

const MenuStyled =  styled.section`

width: 70%;
padding: 10px;

`
export default function Menu() {
    return (
       <MenuStyled>

           {Object.entries(foods).map(([sectionTitle, foods]) => {

               return(
               <>
               <FoodWrapper>
               <h1>{sectionTitle}</h1>
                <FoodGrid>
                    {foodItems.map((food) => {
                    return ( 
                    <Food img = {food.img}>
                        <FoodLabel> {food.name} </FoodLabel>
                        </Food>
                    )
                    })}

           </FoodGrid>
           </FoodWrapper>
               </>

               )

           })}
         
       </MenuStyled>
    )
}
