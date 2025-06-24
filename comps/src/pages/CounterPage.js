import { produce} from "immer"
import {useReducer} from "react"
import Button from "../components/Button"
import Panel from "../components/Panel"

const INCREMENT_COUNT = "increment-count"
const DECREMENT_COUNT = "decrement-count"
const CHANGE_VALUE = "change-value"
const ADD_VALUE = "add-value"

const reducer = (state , action) =>{

  switch(action.type){

    case INCREMENT_COUNT:
        state.count = state.count + 1
        return
     
     case DECREMENT_COUNT:
         state.count = state.count - 1
         return
    
    case CHANGE_VALUE:
      state.valueToAdd = action.payload
      return

    case ADD_VALUE:
      state.count = state.count + state.valueToAdd
        state.valueToAdd = "0"
      return

    default:
      return state;
  }
}

function CounterPage({initialCount}){


  const [ state , dispatch ] = useReducer (produce(reducer),{
    count: initialCount,
    valueToAdd: 0
  })
 
  const increment = () =>{
     dispatch({
      type: INCREMENT_COUNT
     });
  }

  const decrement = () =>{
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleChange = (e) =>{
      const value =parseInt(e.target.value) || 0

     dispatch({
      type: CHANGE_VALUE,
      payload: value
     })
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({
      type:ADD_VALUE
    })
  }
  
  return<Panel className="m-3">
    <h1 className="text-lg">Count is {state.count}</h1>
    <div className="flex flex-row">
       <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
    <form onSubmit={handleSubmit}>
      <label >Add specific </label>
      <input 
       value={state.valueToAdd || ""}
       onChange={handleChange}
      type="number" 
      className="p-1 m-3 bg-gray-50 border border-gray-300"/>
      <Button>Add</Button>
    </form>
  </Panel>
}

export default CounterPage