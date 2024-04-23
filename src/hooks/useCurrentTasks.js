import { useEffect, useState } from "react";
import { orderValues } from "../constants";
import { initialState } from "../constants";

export function useController(tasklist) {
  const [controllerState, setControllerState] = useState(initialState);
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    updateCurrentTasks();
  }, [tasklist]);

  const updateCurrentTasks = () => {
    const { done, pending } = controllerState.byStatus;
    const { ascending, descending } = controllerState.sorted
    if(controllerState.default){
      resetOrder();
    }
    else if(done || pending ){
      const status = done ? orderValues.DONE : orderValues.PENDING;
      showByStatus(status);
    }
    else if(ascending || descending){
      const order = ascending ? orderValues.ASCENDING : orderValues.DESCENDING;
      sortAlphabetically(order)
    }
  }
  const sortAlphabetically = (order) => {
    let newState, newCurrentTasks; 
    if(!controllerState.byStatus.done && !controllerState.byStatus.pending){
      newCurrentTasks = [...tasklist]
      newState = {...controllerState}
    }
    if (order == orderValues.ASCENDING) {
      newState = {
        ...controllerState,
        default: false,
        sorted: { ascending: true, descending: false },
      };
      newCurrentTasks = sortTaskList(newCurrentTasks || [...currentTasks], order);
    } else if (order == orderValues.DESCENDING) {
      newState = {
        ...controllerState,
        default: false,
        sorted: { ascending: false, descending: true },
      };
      newCurrentTasks = sortTaskList(newCurrentTasks || [...currentTasks], order);
    }
    setControllerState(newState);
    setCurrentTasks(newCurrentTasks);
  };

  const resetOrder = ()=>{
    setControllerState(initialState);
    setCurrentTasks([...tasklist])
  }

  const sortTaskList = (list, order) => {
    return list.sort((a, b) => {
      const firstValue = a.taskInput;
      const secondValue = b.taskInput;
      if (order == orderValues.ASCENDING) return firstValue.localeCompare(secondValue);
      else if (order == orderValues.DESCENDING)
        return secondValue.localeCompare(firstValue);
      else return 0;
    });
  };

  const showByStatus = (status) => {
    const newState = status == orderValues.DONE ? {...controllerState,default:false,byStatus:{done:true,pending:false}} : {...controllerState,default:false,byStatus:{done:false,pending:true}};
    let newCurrentTasks = getTaskListByStatus(tasklist, status);
    if(controllerState.sorted.ascending || controllerState.sorted.descending){
      const order = controllerState.sorted.ascending ? orderValues.ASCENDING : orderValues.DESCENDING;
      newCurrentTasks = sortTaskList(newCurrentTasks, order);
    }
    setCurrentTasks(newCurrentTasks);
    setControllerState(newState)
  };

  const getTaskListByStatus = (list, status)=>{
    return list.filter((task) => {
      if (status == orderValues.DONE) return task.done == true;
      else if (status == orderValues.PENDING) return task.done == false;
      else return true;
    });
  }
  return {
    currentTasks,
    sortAlphabetically,
    showByStatus,
    controllerState,
    resetOrder
  };
}
