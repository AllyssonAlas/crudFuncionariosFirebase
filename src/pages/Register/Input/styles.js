import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
	padding-bottom: ${height * 0.03}px;
`

export const Label = styled.Text`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: ${width * 0.01}px;
`

export const TextInput = styled.TextInput`
	background-color: rgba(215, 215, 215, 1);
	border-color: ${props =>
		props.error ? 'rgba(255, 0, 0, 1)' : 'rgba(194, 192, 189, 1)'};
	border-radius: 5px;
	border-width: 1px;
	font-size: 16px;
	font-weight: 400;
	width: ${width * 0.85}px;
`

export const ErrorMessage = styled.Text`
	color: rgba(255, 0, 0, 1);
	font-size: 14px;
	font-weight: bold;
	text-align: center;
`
