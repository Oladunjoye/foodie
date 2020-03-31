import React from 'react'
import styled from 'styled-components'
import {FoodLabel} from '../Menu/FoodGrid'
import { Title } from '../../Styles/Title'
import {formatPrice} from '../../Data/FoodData'
import QuantityInput from './QuantityInput'
import { useQuantity } from '../../Hooks/useQuantity'
import Toppings from './Toppings'

const Modal = styled.div`
background-color: white;
z-index: 10000;
width: 500px;
position: fixed;
max-height: calc(100% - 100px);
top: 75px;
left: calc(50% - 250px);
display: flex;
flex-direction: column;

`

export const ModalContent =  styled.div`
overflow: auto;
min-height: 100px;
padding: 10px;

`

export const ModalFooter =  styled.div`
height: 60px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0px -2px 10px 0px grey;
`

export const ConfirmButton = styled(Title)`
color: white;
border-radius: 5px;
padding: 10px;
margin: 10px;
height: 20px;
width: 200px;
cursor: pointer;
background-color: red;
text-align: center;
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



export default function FoodModal({selectedFood, setFood, orders,setOrders}) {
    const quantity = useQuantity(selectedFood && selectedFood.quantity)

    const order = {
        ...selectedFood,
        quantity: quantity.value
     }

     const getPrice = () => {
       return order.price * order.quantity
     }

    const addToOrder= () => {
       
        setOrders([...orders, order])
        closeModal()
        

    }

    const closeModal = () =>{
        setFood()
    }
    return (
      
        <>
        {selectedFood &&
        <>
        <ModalOverlay onClick = {closeModal}/>
        <Modal>
            <ModalBanner img = {selectedFood.img}>

        <DialogLabel>{selectedFood.name}</DialogLabel>
            </ModalBanner>
         <ModalContent>
      <QuantityInput type ="number" quantity ={quantity}/>   
      <Toppings/>
        </ModalContent>   
        <ModalFooter>
            <ConfirmButton role = 'button' tabIndex= '0' onClick ={addToOrder}>
                Add to Order : {formatPrice(getPrice()  )}
            </ConfirmButton>
        </ModalFooter>
        </Modal>
       </>
        }
        </>
      
    
    )
}
