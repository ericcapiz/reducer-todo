export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_LIST = 'TOGGLE_LIST';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const initialState ={
   items: [{
    task: 'Make ToDo',
    id: 123,
    completed: false,
}]
}

export const reducer = (state,action)=>{
switch (action.type){
    case ADD_ITEM:
        const newItem= {
            task: action.payload,
            id: Date.now(),
            completed:false
        };
         return{
            ...state,
            items:[...state.items,newItem]
        };
        case TOGGLE_LIST:
            return{
                ...state,
                items: state.items.map(item=>{
                    if(action.payload === item.id){
                        return{
                            ...item,
                            completed: !item.completed
                        }
                    }else{
                    return item;
                    }
                })
            }
            case CLEAR_COMPLETED:
                return{
                    ...state,
                    items: state.items.filter(item=> !item.completed)
                };
                default:
                    return state;
}
}