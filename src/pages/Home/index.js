import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import NetInfo from '@react-native-community/netinfo'
import {useFocusEffect} from '@react-navigation/native'

import Container from '../../components/Container'

import Menu from './Menu'
import {TitleContainer, Title, Subtitle, MenuContainer} from './styles'

import * as CollectionActions from '../../store/modules/collection/actions'

export default function Home({navigation}) {
	const dispatch = useDispatch()

	//UseFocusEffect instead of UseEffect because the same is not working here.
	useFocusEffect(
		useCallback(() => {
			NetInfo.addEventListener(state => {
				if (state.isConnected) {
					dispatch(CollectionActions.createEmployeeFromLocalStorage())
				}
			})
			dispatch(CollectionActions.turnOnLoading())
		}, []),
	)

	return (
		<Container noHeader>
			<TitleContainer>
				<Title>CRUD Firebase</Title>
				<Subtitle>Registro de Funcionários</Subtitle>
			</TitleContainer>
			<MenuContainer>
				<Menu navigation={navigation} />
			</MenuContainer>
		</Container>
	)
}
