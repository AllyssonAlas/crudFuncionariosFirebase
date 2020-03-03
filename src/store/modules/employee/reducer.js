import produce from 'immer'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case '@employee/EMPLOYEE_SELECTED':
		case '@employee/UPDATE_INFO_SUCCESS':
			return action.employee
		case '@employee/SET_INFO':
			return produce(state, draft => {
				draft[action.field] = action.value
			})
		default:
			return state
	}
}
