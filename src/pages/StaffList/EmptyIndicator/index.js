import React from 'react'

import Card from '../../../components/Card'
import Button from '../../../components/Button'

import {Container} from './styles'

export default function EmptyIndicator({navigation}) {
	return (
		<Container>
			<Card image={'empty-box'}/>
			<Button onPress={() => navigation.popToTop()} title={'Voltar'}/>
		</Container>
	)
}
