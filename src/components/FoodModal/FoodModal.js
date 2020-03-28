import React from 'react'
import styled from 'styled-components'
import {FoodLabel} from '../Menu/FoodGrid'

const Modal = styled.div`
background-color: white;
z-index: 10000;
width: 500px;
height: 500px;
position: fixed;
height: calc(100% - 10px);
top: 75px;
bottom: 300px;
left: calc(50% - 250px)

`

const ModalOverlay = styled.div`

width: 100%;
height: 100%;
position: fixed;
top:  0px;
background-color: rgba(0,0,0,0.75);
z-index: 5;

`


const ModalBanner =  styled.div`
min-height: 200px;
margin-bottom: 20px;
background-image :  ${({img}) => img ?  `url(${img})` : `url(/Images/default-pizza.jpg)`};
background-position: center;
background-size: cover;

`

const DialogLabel =  styled(FoodLabel)`
top: 100px;
padding: 5px 40px;
font-size: 30px;
`



export default function FoodModal({selectedFood, setFood}) {
    return (
      
        <>
        {selectedFood &&
        <ModalOverlay onClick = {()=> setFood()}>
        <Modal>
            <ModalBanner img = {selectedFood.img}>

        <DialogLabel>{selectedFood.name}</DialogLabel>
            </ModalBanner>
        </Modal>
        </ModalOverlay>
        }
        </>
      
    
    )
}
