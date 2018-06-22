import * as actionTypes from '../actions/actionTypes'

const initialState = JSON.parse(localStorage.getItem('todo')) || []

const reducer = (state = initialState, action) => {
  //
  switch (action.type) {
    case actionTypes.ADD_TODOLIST:
      const { payload } = action

      const newPayload = {
        ...payload,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      }

      const result = [ ...state, Object.assign({}, newPayload) ]
      localStorage.setItem('todo', JSON.stringify(result))
      return result

    case actionTypes.DELETE_TODOLIST:
      const resultDelete = state.filter((i) => i.id !== action.payload)
      localStorage.setItem('todo', JSON.stringify(resultDelete))
      return resultDelete

    case actionTypes.EDIT_TODOLIST:
      const editState = state.findIndex((i) => i.id === action.payload.id)
      const resultEdit = [
        ...state.slice(0, editState),
        {
          ...action.payload
        },
        ...state.slice(editState + 1)
      ]
      localStorage.setItem('todo', JSON.stringify(resultEdit))
      return resultEdit

    case actionTypes.CHENGE_COMPLETED:
      const editComp = state.findIndex((i) => i.id === action.payload.id)
      const changeComp = [
        ...state.slice(0, editComp),
        {
          ...state[editComp],
          completed: action.payload.completed
        },
        ...state.slice(editComp + 1)
      ]
      localStorage.setItem('todo', JSON.stringify(changeComp))
      return changeComp
    default:
      break
  }
  return state
}

export default reducer
