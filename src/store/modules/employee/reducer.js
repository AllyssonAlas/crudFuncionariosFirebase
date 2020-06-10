const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case '@employee/EMPLOYEE_SELECTED':
		case '@employee/UPDATE_INFO_SUCCESS':
			return action.employee
		default:
			return state
	}
}
