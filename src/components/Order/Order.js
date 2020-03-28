import React from 'react'
import styled from 'styled-components'
import {ConfirmButton, ModalFooter, ModalContent} from '../FoodModal/FoodModal'

const OrderStyled = styled.section`

width: 360px;
right: 0;
background-color: white;
color: red;
top: 60px;
position: fixed;
z-index:1000;
opacity: 0.8;
height: calc(100% - 62px);
box-shadow: 6px 3px 5px 1px grey;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

const OrderContent = styled(ModalContent)`
height: 100%;
padding: 20px;
`

const OrderFooter = styled(ModalFooter)`

`
export default function Order({orders}) {
    return (
        <OrderStyled>
             {orders.length === 0 ? 
             
            ( <OrderContent>
               Your order is pretty empty. You should add to it
             </OrderContent>)

             :
             <OrderContent>
                 {orders.length} Orders
             </OrderContent>
            }
           
            <OrderFooter>
                <ConfirmButton>Confirm Order</ConfirmButton>
            </OrderFooter>
        </OrderStyled>
    )
}
