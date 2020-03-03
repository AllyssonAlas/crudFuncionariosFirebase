import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
	align-items: center;
	background: rgba(255, 255, 255, 0.85);
	border-radius: 10px;
	height: ${height * 0.6}px;
	justify-content: space-evenly;
	padding-top: ${height * 0.03}px;
	width: ${width * 0.9}px;
`

export const Image = styled.Image`
	height: ${height * 0.35}px;
	padding-top: ${height * 0.02}px;
	/* prettier-ignore */
	resizeMode: center;
	width: ${width * 0.85}px;
`

export const TextContainer = styled.View`
	height: ${height * 0.15}px;
	justify-content: space-evenly;
`

export const Text = styled.Text`
	font-size: 18px;
	text-align: center;
`

export const ImageCopyright = styled.Text`
	color: rgba(184, 134, 11, 1);
	font-size: 13px;
	font-weight: bold;
`
