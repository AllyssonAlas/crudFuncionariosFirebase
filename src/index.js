import React from 'react'
import {StatusBar} from 'react-native'
import {Provider} from 'react-redux'

import Routes from './routes'
import store from './store'

export default function App() {
	return (
		<>
			<StatusBar backgroundColor={'rgba(246, 130, 13, 1)'} />
			<Provider store={store}>
				<Routes />
			</Provider>
		</>
	)
}
