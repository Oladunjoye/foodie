import {useState} from 'react'
export const useSelectedFood  = () => {
    const [selectedFood, setFood] = useState()
    return{
        selectedFood,
        setFood
    }
} 