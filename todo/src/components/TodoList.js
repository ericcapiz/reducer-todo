import React from 'react'
import Item from './Item'

const TodoList = props=>{
    return (
        <div className="list">
            {props.items.map(item=>(
                <Item key={item.id} item={item} toggleList={props.toggleList} />
            ))}
        <button type="submit" onClick={props.clearTask}>
            Clear Completed Tasks
        </button>
        </div>
    )
}
export default TodoList