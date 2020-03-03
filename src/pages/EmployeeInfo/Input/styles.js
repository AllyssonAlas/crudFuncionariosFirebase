import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
	align-items: center;
	justify-content: center;
	width: ${width * 0.47}px;
`

export const Label = styled.Text`
	color: ${props =>
		props.error ? 'rgba(255, 0, 0, 1)' : 'rgba(128, 128, 128, 1)'};
	font-size: 14px;
`

export const TextInput = styled.TextInput`
	color: ${props =>
		props.error ? 'rgba(255, 0, 0, 1)' : 'rgba(128, 128, 128, 1)'};
	font-size: 14px;
	height: ${height * 0.07}px;
	text-align: center;
	width: ${width * 0.4}px;
`
