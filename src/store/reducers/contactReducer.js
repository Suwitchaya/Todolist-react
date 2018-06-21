import * as actionTypes from '../actions/actionTypes'

const initialState = {
  id: 1,
  title: 'testtitle',
  description: 'desdes',
  date: '2017/12/12',
  time: '13:30',
  completed: 1
}

const reducer = (state = initialState, action) => {
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
    case actionTypes.CHENGE_COMPLETED:
      console.log('action.payload=>>>', action.payload)
      // return{

      // }
      break
    default:
      break
  }
  return state
}

export default reducer
