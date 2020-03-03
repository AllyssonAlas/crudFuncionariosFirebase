export function createEmployeeRequest(form) {
	return {
		type: '@collection/ASYNC_CREATE_EMPLOYEE_REQUEST',
		form,
	}
}

export function createEmployeeFromLocalStorage() {
	return {
		type: '@collection/ASYNC_CREATE_EMPLOYEE_FROM_LOCAL_STORAGE',
	}
}

export function getCollectionRequest() {
	return {
		type: '@collection/ASYNC_GET_COLLECTION_REQUEST',
	}
}

export function turnOnLoading() {
	return {
		type: '@collection/TURN_ON_LOADING',
		message: 'Carregando',
	}
}
