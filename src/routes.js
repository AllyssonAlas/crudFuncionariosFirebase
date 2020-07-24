import React, {createRef, useEffect} from 'react'
import {NavigationContainer, CommonActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useNetInfo} from '@react-native-community/netinfo'
import {useDispatch} from 'react-redux'

import Home from './pages/Home'
import EmployeeInfo from './pages/EmployeeInfo'
import Register from './pages/Register'
import RegisterConfirm from './pages/RegisterConfirm'
import StaffList from './pages/StaffList'

import * as CollectionActions from './store/modules/collection/actions'

const Stack = createStackNavigator()
const navigationRef = createRef()

export function navigate (name, params) {
	navigationRef.current?.dispatch(CommonActions.navigate(name, params))
}

export default function Routes () {
	const {isInternetReachable} = useNetInfo()
	const dispatch = useDispatch()

	useEffect(() => {
		if (isInternetReachable) {
			dispatch(CollectionActions.createEmployeeFromLocalStorage())
		}
	}, [isInternetReachable])

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator headerMode={'none'} initialRouteName={'Home'}>
				<Stack.Screen component={Home} name={'Home'} />
				<Stack.Screen component={EmployeeInfo} name={'EmployeeInfo'} />
				<Stack.Screen component={Register} name={'Register'} />
				<Stack.Screen component={RegisterConfirm} name={'RegisterConfirm'} />
				<Stack.Screen component={StaffList} name={'StaffList'} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
