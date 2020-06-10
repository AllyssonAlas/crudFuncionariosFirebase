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

export function updateInfoRequest(id, newInfo) {
	return {
		type: '@employee/UPDATE_INFO_REQUEST',
		id,
		newInfo,
	}
}
