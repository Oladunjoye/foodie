import React from 'react'
import styled from 'styled-components'
import {ConfirmButton, ModalFooter, ModalContent} from '../FoodModal/FoodModal'
import {formatPrice} from '../../Data/FoodData'


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
padding: 10px 0px;
color: black;
font-family: 'Open Sans', sans-serif;

display: grid;
grid-template-columns: 20px 150px 20px 60px;


`
const OrderFooter = styled(ModalFooter)`

`
export default function Order({orders}) {
    const getPrice = (order) => {

        const perToppingPrice = 100

        const toppingQty = order.toppings.filter((t) =>  t.checked).length
        const totalToppingPrice = (perToppingPrice * toppingQty) 
      return order.quantity * (order.price + totalToppingPrice )
    }

    const subTotal =  orders.reduce((total, order)=> {
            return total + getPrice(order)
        }, 0)
        
       
         const tax= subTotal * 0.025
         const total  = subTotal + tax

    
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
                         <OrderContent>                         <OrderItem>
                             <div>1</div>
                             <div>{order.name}</div>
                             <div>{order.quantity}</div>
                             
                            <div> {formatPrice(getPrice(order))} </div>
                         </OrderItem>
                         </OrderContent>

                     )
                 })}
            <OrderContent>
            <OrderItem>
            <div/>
            <div> Sub-Total</div>
             <div> {formatPrice(subTotal)} </div>
            </OrderItem>
            <OrderItem>
            <div/>
            <div> Tax </div>
             <div> {formatPrice(tax)} </div>
            </OrderItem>
            <OrderItem>
            <div/>
            <div> Total</div>
             <div> {formatPrice(total)} </div>
            </OrderItem>
            </OrderContent>
           

             </OrderMain>
            }
           
            <OrderFooter>
                <ConfirmButton>Confirm Order</ConfirmButton>
            </OrderFooter>
        </OrderStyled>
    )
}
