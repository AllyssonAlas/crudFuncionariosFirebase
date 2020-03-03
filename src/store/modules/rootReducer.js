import {combineReducers} from 'redux'

import collection from './collection/reducer'
import employee from './employee/reducer'

export default combineReducers({
	collection,
	employee,
})
