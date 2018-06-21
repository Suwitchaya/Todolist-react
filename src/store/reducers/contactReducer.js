import * as actionTypes from '../actions/actionTypes'

const initialState = [
  {
  id: 1,
  title: 'testtitle',
  description: 'desdes',
  date: '2017/12/12',
  time: '13:30',
  completed: 0
},
{
  id: 2,
  title: 'หกดเพกดหปอผททมใฝพพพพ',
  description: 'หหหหหหหหหหห',
  date: '2017/12/12',
  time: '13:30',
  completed: 1
}]

const reducer = (state = initialState, action) => {
  console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case actionTypes.ADD_TODOLIST:
      console.log('action.payload=>>>', action.payload)
      return  [...state, Object.assign({}, action.payload)];
        // ...state,
        // title: action.payload.title,
        // description: action.payload.description,
        // date: action.payload.date,
        // time: action.payload.time,
        // completed: 0
      
    case actionTypes.DELETE_TODOLIST:
      return state.filter((i) => i.id !== action.payload)

    case actionTypes.EDIT_TODOLIST:
    const editState = state.find((i) => i.id === action.payload.id)
    return [
      ...editState,
      Object.assign({}, action.payload)
    ]
      // return {...editState, 
      //   [state.title]: action.payload.title,
      //   [state.description]: action.payload.description,
      //   [state.date]: action.payload.date,
      //   [state.time]: action.payload.time}

    default:
      break
  }
  return state
}

export default reducer
