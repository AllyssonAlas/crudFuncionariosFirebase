import React, {useEffect, useRef} from 'react'
import {useField} from '@unform/core'

import {Container, Label, TextInput, ErrorMessage} from './styles'

export default function Input({name, label, ...rest}) {
	const inputRef = useRef(null)
	const {fieldName, registerField, defaultValue = '', error} = useField(name)

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: '_lastNativeText',
			getValue(ref) {
				return ref._lastNativeText || ''
			},
			setValue(ref, value) {
				ref.setNativeProps({text: value})
				ref._lastNativeText = value
			},
			clearValue(ref) {
				ref.setNativeProps({text: ''})
				ref._lastNativeText = ''
			},
		})
	}, [fieldName, registerField])

	return (
		<Container>
			<Label>{label}</Label>
			<TextInput ref={inputRef} error={error} {...rest} />
			{error && <ErrorMessage>{error}</ErrorMessage>}
		</Container>
	)
}
