import * as T from './types'

const initialState: T.State = [ ]

export const reducer = (state:T.State = initialState,action:T.Actions) => {
  switch(action.type){
    case '@lisidOrders/set':
      return action.payload
    case '@lisidOrders/add':
      return [...state,action.payload]
    case '@lisidOrders/remove':
      return state.filter(uuid =>uuid !== action.payload)
  }
  return state
}