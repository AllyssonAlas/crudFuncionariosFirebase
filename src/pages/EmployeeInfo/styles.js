import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Body = styled.ScrollView.attrs(() => ({
	contentContainerStyle: {alignItems: 'center'},
	showsVerticalScrollIndicator: false,
}))`
	background-color: rgba(255, 255, 255, 0.95);
	padding-top: ${height * 0.025}px;
	width: ${width}px;
`

export const Title = styled.Text`
	font-size: 22px;
	font-weight: bold;
	margin-bottom: ${height * 0.007}px;
	text-align: center;
`

export const Subtitle = styled.Text`
	color: rgba(128, 128, 128, 1);
	font-size: 20px;
	margin-bottom: ${height * 0.005}px;
	text-align: center;
`

export const Section = styled.View`
	flex-direction: row;
	height: ${height * 0.077}px;
	margin-top: ${height * 0.02}px;
	width: ${width * 0.95}px;
`

export const HourSheetContainer = styled.View`
	align-items: center;
	flex-direction: row;
	justify-content: space-around;
	width: ${width * 0.55}px;
`

export const SmallButton = styled.TouchableOpacity`
	align-items: center;
	background-color: rgba(248, 248, 255, 1);
	border-color: rgba(0, 0, 0, 0.4);
	border-radius: 20px;
	border-width: 1px;
	height: ${height * 0.06}px;
	justify-content: center;
	margin-top: ${height * 0.015}px;
	width: ${width * 0.15}px;
`

export const TextButton = styled.Text`
	color: rgba(128, 128, 128, 1);
	font-size: 26px;
`

export const ButtonContainer = styled.View`
	height: ${height * 0.35}px;
	justify-content: space-around;
	/* prettier-ignore */
	paddingVertical: ${height * 0.02}px;
`
