import React from 'react'
import styled from 'styled-components'
import {ConfirmButton, ModalFooter, ModalContent} from '../FoodModal/FoodModal'

const OrderStyled = styled.section`

width: 360px;
right: 0;
background-color: white;
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

const OrderMain = styled(ModalContent)`
height: 100%;
padding: 20px;
color: red;

`

const OrderContent =styled.div`
padding: 10px 0px;
border-bottom: 1px solid grey;
`

const OrderItem = styled.div`
border-bottom: 1px solid grey;
padding: 10px 0px;
color: black;
font-family: 'Open Sans', sans-serif;


`
const OrderFooter = styled(ModalFooter)`

`
export default function Order({orders}) {
    return (
        <OrderStyled>
             {orders.length === 0 ? 
             
            ( <OrderMain>
               Your order is pretty empty. You should add to it
             </OrderMain>)

             :
             <OrderMain>
                  <OrderContent>You have {orders.length} Orders </OrderContent>
                 {orders.map((order) => {
                     return (
                         <OrderItem>
                             {order.name}
                         </OrderItem>
                     )
                 })}
             </OrderMain>
            }
           
            <OrderFooter>
                <ConfirmButton>Confirm Order</ConfirmButton>
            </OrderFooter>
        </OrderStyled>
    )
}
