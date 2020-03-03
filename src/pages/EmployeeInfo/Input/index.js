import React from 'react'
import {TextInputMask} from 'react-native-masked-text'

import {Container, Label, TextInput} from './styles'

export default function Input(props) {
	return (
		<Container>
			<Label error={props.error}>{props.label}</Label>
			{props.type ? (
				<TextInput as={TextInputMask} error={props.error} {...props} />
			) : (
				<TextInput error={props.error} {...props} />
			)}
		</Container>
	)
}
