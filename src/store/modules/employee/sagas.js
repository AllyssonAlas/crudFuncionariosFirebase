import {
	all,
	call,
	put,
	select,
	takeEvery,
	takeLeading,
} from 'redux-saga/effects'

import * as RootNavigation from '../../../routes'

import {deleteEmployee} from '../../../services/firestore/deleteData'
import {updateEmployee} from '../../../services/firestore/updateData'

function* deleteSelectedEmployee({id}) {
	yield call(deleteEmployee, id)
	yield RootNavigation.navigate('Home')
}

function* selectEmployee({id}) {
	const employee = yield select(state =>
		state.collection.data.find(e => e.id === id),
	)
	yield put({type: '@employee/EMPLOYEE_SELECTED', employee})
	yield call(RootNavigation.navigate, 'EmployeeInfo')
}

function* updateEmployeeInfo({id}) {
	const employee = yield select(state => state.employee)
	yield call(updateEmployee, id, employee)
	yield put({type: '@employee/UPDATE_INFO_SUCCESS', employee})
}

export default all([
	takeEvery('@employee/ASYNC_SELECT_EMPLOYEE_REQUEST', selectEmployee),
	takeEvery('@employee/ASYNC_DELETE_EMPLOYEE_REQUEST', deleteSelectedEmployee),
	takeLeading('@employee/UPDATE_INFO_REQUEST', updateEmployeeInfo),
])
