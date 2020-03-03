export function deleteEmployeeRequest(id) {
	return {
		type: '@employee/ASYNC_DELETE_EMPLOYEE_REQUEST',
		id,
	}
}
export function selectEmployeeRequest(id) {
	return {
		type: '@employee/ASYNC_SELECT_EMPLOYEE_REQUEST',
		id,
	}
}

export function setInfo(field, value) {
	return {
		type: '@employee/SET_INFO',
		field,
		value,
	}
}

export function updateInfoRequest(id) {
	return {
		type: '@employee/UPDATE_INFO_REQUEST',
		id,
	}
}
