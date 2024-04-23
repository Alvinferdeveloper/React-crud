import opciones from "../helper/opciones";
import reducer from '../helper/Reducer'
import { useReducer } from "react";

export function useStore(){
    const [taskList, dispatch] = useReducer(reducer, []);
    
    const addNewTask = (payload)=> {
        console.log(payload)
        dispatch({type:opciones.add,payload})
    }

    const removeTask = (payload)=> {
        console.log(payload)
        dispatch({type:opciones.delete,payload});
    }
    const updateTaskState = (payload)=> {
        dispatch({type:opciones.updateStateOfTask,payload});
    }

    const orderTaskList = (payload)=>{
        dispatch({type:"order",payload});
    }

    return { 
        taskList,
        addNewTask,
        removeTask,
        updateTaskState,
        orderTaskList
    }
}
