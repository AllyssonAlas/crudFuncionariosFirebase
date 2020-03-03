import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Wrapper = styled.View`
	align-items: center;
	background-color: rgba(5, 155, 229, 1);
	flex: 1;
	justify-content: space-around;
	padding-top: ${props => (props.noHeader ? height * 0.05 : 0)}px;
`

export const ImageBackground = styled.Image.attrs(() => ({
	source: require('../../assets/images/firebase-logo.png'),
}))`
	flex: 1;
	height: ${height * 0.65}px;
	position: absolute;
	/* prettier-ignore */
	resizeMode: stretch;
	top: ${height * 0.2}px;
	width: ${width * 0.8}px;
`
