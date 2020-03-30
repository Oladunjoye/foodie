import {useEffect} from 'react'

export const useTitle = ({selectedFood, orders}) => {

   useEffect(() => {
      if(selectedFood){
          document.title = selectedFood.name
      }
      else{
        document.title = 'Foodie'

      }
   })
} 