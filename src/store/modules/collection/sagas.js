import {
	put,
	call,
	all,
	takeEvery,
	takeLeading,
	takeLatest,
} from 'redux-saga/effects'
import Toast from 'react-native-tiny-toast'

import {createNewEmployee} from '../../../services/firestore/createData'
import {getLastId, getCollection} from '../../../services/firestore/readData'

import {deleteRegister} from '../../../services/asyncStorage/deleteData'
import {getAllKeys, getRegister} from '../../../services/asyncStorage/getData'
import {storeRegister} from '../../../services/asyncStorage/storeData'

import verifyConnection from './utils/verifyConnection'

function* createEmployee(form) {
	const lastId = yield call(getLastId)
	yield call(createNewEmployee, lastId, form)
}

function* createEmployeeFromFormReducer(form) {
	yield call(createEmployee, form)
	yield put({
		type: '@collection/CREATE_EMPLOYEE_SUCCESS',
		message: 'Funcionário registrado no Firebase\ncom sucesso.',
	})
}

function* createEmployeeFromLocalStorage() {
	const isConnected = yield call(verifyConnection)
	const allKeys = yield call(getAllKeys)
	if (isConnected && allKeys.length !== 0) {
		Toast.show('Cadastrando funcionário armazenado localmente.', {
			position: Toast.position.TOP,
		})
		const firstKey = allKeys.shift()
		const form = yield call(getRegister, firstKey)
		yield call(createEmployee, JSON.parse(form))
		yield call(deleteRegister, firstKey)
		yield call(createEmployeeFromLocalStorage)
	}
}

function* createEmployeeRequest({form}) {
	const isConnected = yield call(verifyConnection)
	if (isConnected) {
		return yield call(createEmployeeFromFormReducer, form)
	}
	return yield call(storeEmployee, form)
}

function* getFirestoreCollection() {
	const data = yield call(getCollection)
	if (data.length === 0) {
		return yield put({
			type: '@collection/GET_COLLECTION_SUCCESS',
			data: null,
			message:
				'Não há funcionarios cadastrados\nou não foi possível se conectar\nao Firebase',
		})
	}
	return yield put({type: '@collection/GET_COLLECTION_SUCCESS', data})
}

function* storeEmployee(form) {
	const allKeys = yield call(getAllKeys)
	const newKey = allKeys.length === 0 ? 1 : parseInt(allKeys.pop()) + 1
	yield call(storeRegister, newKey, form)
	yield put({
		type: '@collection/STORE_EMPLOYEE_SUCCESS',
		message:
			'Impossivel conectar-se ao Firebase.\n\nFuncionário será registrado ao conectar-se à Internet.',
	})
}

export default all([
	takeEvery('@collection/ASYNC_CREATE_EMPLOYEE_REQUEST', createEmployeeRequest),
	takeLeading(
		'@collection/ASYNC_CREATE_EMPLOYEE_FROM_LOCAL_STORAGE',
		createEmployeeFromLocalStorage,
	),
	takeLatest(
		'@collection/ASYNC_GET_COLLECTION_REQUEST',
		getFirestoreCollection,
	),
])
