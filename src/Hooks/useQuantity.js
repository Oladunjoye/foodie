import  {useState} from 'react'

export const useQuantity = (defaultQuantity = 1) => {
    const [value, setValue] = useState(defaultQuantity)

    const onChange = (e) => {
        if(!(+e.target.value >= 1)){
            setValue(1)
            return
        }
        if(e.target.value > 10){
            setValue(10)
            return
        }
        setValue(e.target.value)
    }
    return {
        value,
        setValue,
        onChange
    }

}