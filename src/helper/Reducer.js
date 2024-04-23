import opciones from "./opciones";


export default function taskReducer(state,{ type, payload }){
    const {delete:del, add, updateStateOfTask} = opciones;
    switch(type){
        case add:
            return [...state,payload];
        case updateStateOfTask:
            return state.map(task=>task.id==payload.id ? {...task,done:!task.done}: task);
        case del:
            return state.filter(task=>task.id!=payload.id);
        case "order":
            return [...payload]
    }

}