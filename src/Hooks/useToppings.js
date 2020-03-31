import {useState} from 'react'

export const useToppings = (defaultToppings = getToppings()) => {

    const[toppings, setToppings] =  useState(defaultToppings )

    const checkTopping = (index) => {
        const newToppings = [...toppings]
        newToppings[index].checked =   !(newToppings[index].checked)
        setToppings(newToppings)
    }


    return {
        checkTopping,
        toppings
    }

}


const toppingsList = [
    "Extra Cheese",
    "Mushroom",
    "Pepperoni",
    "Onions",
    "Pineapple",
    "Artichokes",
    "Sausage",
    "Spinach",
    'Bacon',
"Black olives",
"Green peppers"
]

const getToppings = () => {

   return toppingsList.map((topping) => ({
        name: topping,
        checked: false
    })
    )
}