import {all} from 'redux-saga/effects'

import collection from './collection/sagas'
import employee from './employee/sagas'

export default function* rootSaga() {
	return yield all([collection, employee])
}
