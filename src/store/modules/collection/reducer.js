import produce from 'immer'

const INITIAL_STATE = {
	data:[],
	loading: true,
	message: 'Carregando',
}

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case '@collection/CREATE_EMPLOYEE_SUCCESS':
		case '@collection/STORE_EMPLOYEE_SUCCESS':
			return produce(state, draft => {
				draft.loading = false
				draft.message = action.message
			})
		case '@collection/GET_COLLECTION_SUCCESS':
			return produce(state, draft => {
				draft.loading = false
				draft.message = action.message || ''
				draft.data = action.data
			})
		case '@collection/TURN_ON_LOADING':
			return produce(state, draft => {
				draft.loading = true
				draft.message = action.message
			})
		default:
			return state
	}
}
