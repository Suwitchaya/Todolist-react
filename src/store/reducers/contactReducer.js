import * as actionTypes from '../actions/actionTypes'

const initialState = [
  {
    id: 'x1',
    title: 'testtitle',
    description: 'desdes',
    date: 'Wed Jun 20 2018 00:00:00 GMT+0700',
    time: '13:30',
    completed: 0
  },
  {
    id: 'x2',
    title: 'หกดเพกดหปอผททมใฝพพพพ',
    description: 'หหหหหหหหหหห',
    date: 'Wed Jun 17 2018 00:00:00 GMT+0700',
    time: '13:30',
    completed: 1
  }
]

const reducer = (state = initialState, action) => {
  console.log('state: ', state)
  // console.log('action: ', action)
  switch (action.type) {
    case actionTypes.ADD_TODOLIST:
      console.log('action.payload=>>>', action.payload)
      const { payload } = action

      const newPayload = {
        ...payload,
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        completed: 0
      }

      const result = [ ...state, Object.assign({}, newPayload) ]
      localStorage.setItem('todo', JSON.stringify(result))
      return result

    case actionTypes.DELETE_TODOLIST:
      const resultDelete = state.filter((i) => i.id !== action.payload)
      localStorage.setItem('todo', JSON.stringify(resultDelete))
      return resultDelete

    case actionTypes.EDIT_TODOLIST:
      const editState = state.find((i) => i.id === action.payload.id)
      const resultEdit = [ ...editState, Object.assign({}, action.payload) ]
      localStorage.setItem('todo', JSON.stringify(resultEdit))
      return
    case actionTypes.CHENGE_COMPLETED:
      console.log('action.payload=>>>', action.payload)
      const editComp = state.findIndex((i) => i.id === action.payload.id)
      console.log('editComp: ', editComp)
      return [
        ...state.slice(0, editComp),
        {
          ...state[editComp],
          completed: action.payload.completed
        },
        ...state.slice(editComp + 1)
      ]
    default:
      break
  }
  return state
}

export default reducer
