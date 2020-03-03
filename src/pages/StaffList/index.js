import React, {useEffect} from 'react'
import {FlatList} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Icon from '../../components/Icon'

import ListItem from './ListItem'
import EmptyIndicator from './EmptyIndicator'

import * as CollectionActions from '../../store/modules/collection/actions'

export default function StaffList({navigation}) {
	const data = useSelector(state =>
		state.collection.loading ? null : state.collection.data,
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(CollectionActions.getCollectionRequest())
	}, [])

	return (
		<Container>
			<Header
				rightComponent={
					<Icon name={'arrow-right'} onPress={() => navigation.popToTop()} />
				}
				title={'Funcionários'}
			/>
			<FlatList
				data={data}
				keyExtractor={item => item.id.toString()}
				ListEmptyComponent={<EmptyIndicator navigation={navigation} />}
				renderItem={({item}) => (
					<ListItem employee={item} navigation={navigation} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}
