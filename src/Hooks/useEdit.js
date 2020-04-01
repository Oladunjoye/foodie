import {useState} from "react"

export const useEdit = () => {
    const [edit,setEdit] = useState({value:false, index: ""})

    return{
        edit,
        setEdit
    }
}