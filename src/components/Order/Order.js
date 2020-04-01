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
grid-template-columns:2.5fr 1fr 1fr 1fr ;


`

const OrderSubItem = styled(OrderItem)`
grid-template-columns: repeat(3, 1fr) 20px;`


const OrderFooter = styled(ModalFooter)`

`

const ItemName= styled.div`

cursor: pointer;
transition-property: hover;
transition-duration: 2s;
&:hover{
    color: red;
}
`

const DetailItem = styled.div`
color: grey;
font-size: 10px;
`
export default function Order({orders, setOrders, setFood, setEdit, edit}) {
    // const editHook = useEdit()

    const handleEdit = (order,index) => {
        setEdit({value: true, index: index})
       setFood({...order})
       
    }

    // console.log('Order Modal',editHook.edit)

    const getPrice = (order) => {

        const perToppingPrice = 100

        const toppingQty = order.toppings.filter((t) =>  t.checked).length
        const totalToppingPrice = (perToppingPrice * toppingQty) 
      return order.quantity * (order.price + totalToppingPrice )
    }

    const deleteOrder= (id,e) => {
        e.stopPropagation()
        const newOrders= [...orders]
        newOrders.splice(id,1)
        setOrders(newOrders)

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
                  <OrderContent>You have {orders.length} Order(s) </OrderContent>
                  <OrderContent>
                      <OrderItem>
                          <div>Name</div>
                          <div>Qty</div>
                          <div>Price</div>
                          <div></div>

                      </OrderItem>
                  </OrderContent>
                 {orders.map((order, index) => {
                     return (
                         <OrderContent key = {index}>                  
                           <OrderItem >
                             <ItemName 
                             
                             onClick= {()=> handleEdit(order,index)}>{order.name}</ItemName>
                             <div> x {order.quantity}</div>
                             
                            <div> {formatPrice(getPrice(order))} </div>
                            <div style ={{cursor: 'pointer', marginLeft: "auto", color:"red"}} onClick = {(e) => deleteOrder(index,e)}> ✘</div>
                         </OrderItem>
                        <DetailItem>
                         {
                             order.toppings.filter((t) =>  t.checked).map((t)=> t.name).join(', ')
                         }
                         </DetailItem>
                         </OrderContent>

                     )
                 })}
            <OrderContent>
            <OrderSubItem>
            <div/>
            <div> Sub-Total</div>
             <div> {formatPrice(subTotal)} </div>
            <div/>

            </OrderSubItem>
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
