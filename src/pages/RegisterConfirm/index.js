import React, {useEffect} from 'react'
import {BackHandler} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import Container from '../../components/Container'
import Card from '../../components/Card'
import Button from '../../components/Button'

import * as CollectionActions from '../../store/modules/collection/actions'

export default function RegisterConfirm({navigation, route}) {
	const {loading} = useSelector(state => state.collection)
	const {form} = route.params
	const dispatch = useDispatch()

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => {
			return loading ? true : navigation.popToTop()
		})
		//React Navigation bug: removeListener won't work unless stack screen is reset in React Navigation.
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', () => false)
		}
	})

	useEffect(() => {
		dispatch(CollectionActions.createEmployeeRequest(form))
	}, [])

	return (
		<Container noHeader>
			<Card image={'success'} />
			<Button
				disabled={loading}
				onPress={() => navigation.popToTop()}
				title={loading ? 'Aguarde' : 'Confirmar'}
			/>
		</Container>
	)
}
