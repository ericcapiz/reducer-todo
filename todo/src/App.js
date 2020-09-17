import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';
import{reducer,initialState,ADD_ITEM,TOGGLE_LIST,CLEAR_COMPLETED} from './reducers/reducers'

function App() {
  const [state,dispatch]=useReducer(reducer,initialState);

  const addItem = (e,item)=>{
    e.preventDefault();
    dispatch({type:ADD_ITEM, payload:item})
  };

  const toggleList = itemId =>{
    dispatch({type:TOGGLE_LIST, payload:itemId})
  };

  const clearCompleted = e =>{
    e.preventDefault();
    dispatch({type:CLEAR_COMPLETED})
  };
    return (
      <div className="App">
      <div className="header">
      <h2>Welcome to your Todo App!</h2>
      <TodoForm addItem={addItem} />
      </div>
      <TodoList items={state.items} toggleList={toggleList}
      clearCompleted={clearCompleted}></TodoList>
      </div>
    
  )
}

export default App;
