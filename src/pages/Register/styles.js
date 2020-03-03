import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Title = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`

export const FormContainer = styled.ScrollView.attrs(() => ({
	contentContainerStyle: {alignItems: 'center'},
	showsVerticalScrollIndicator: false,
}))`
	padding-top: ${height * 0.015}px;
`

export const ButtonContainer = styled.View`
	align-items: flex-start;
	flex-direction: row;
	height: ${height * 0.12}px;
	justify-content: space-evenly;
	width: ${width}px;
`
