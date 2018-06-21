import * as actionTypes from '../actions/actionTypes'

const initialState = {
  id: 2,
  title: 'testtitle',
  description: 'desdes',
  date: '2017/12/12',
  time: '13:30',
  completed: 0
}

const reducer = (state = initialState, action) => {
  console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case actionTypes.ADD_TODOLIST:
      console.log('action.payload=>>>', action.payload)
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
        date: action.payload.date,
        time: action.payload.time,
        completed: 0
      }
    case actionTypes.DELETE_TODOLIST:
      console.log('action.payload=>>>', action.payload)
      const x = [ state ].filter((i) => i.id !== action.payload)
      console.log('x: ', x)
      return x

      break
    default:
      break
  }
  return state
}

export default reducer
