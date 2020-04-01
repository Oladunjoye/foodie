import React, {Fragment} from 'react'
import styled from 'styled-components'
import {FoodGrid, Food, FoodLabel, FoodWrapper} from './FoodGrid'
import {foodItems, foods} from '../../Data/FoodData'
// import {Title} from '../../Styles/Title' 

const MenuStyled =  styled.section`

width: 70%;
padding: 10px;

`
export default function Menu(props) {
    return (
       <MenuStyled>

           {Object.entries(foods).map(([sectionTitle, foods],index) => {

               return(
               <Fragment key ={index}>
               <FoodWrapper >
               <h1>{sectionTitle}</h1>
                <FoodGrid>
                    {foodItems.map((food, index) => {
                    return ( 
                    <Food key = {index} img = {food.img} onClick = {() => props.setFood(food) }>
                        <FoodLabel> {food.name} </FoodLabel>
                    </Food>
                    )
                    })}

           </FoodGrid>
           </FoodWrapper>
               </Fragment>

               )

           })}
         
       </MenuStyled>
    )
}
