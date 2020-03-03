import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height} = Dimensions.get('window')

export const Container = styled.View`
	align-items: center;
	height: ${height * 0.84}px;
	justify-content: space-evenly;
	padding-top: ${height * 0.03}px;
`
