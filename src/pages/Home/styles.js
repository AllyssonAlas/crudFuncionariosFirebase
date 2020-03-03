import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const TitleContainer = styled.View`
	align-items: center;
  justify-content: space-between;
  height: ${height * 0.17}px;
`

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
`

export const Subtitle = styled.Text`
  font-size: 30px;
`

export const MenuContainer = styled.View`
  align-items: center;
  justify-content: space-evenly;
  height: ${height * 0.74}px;
  padding-top: ${height * 0.05}px;
  width: ${width}px;
`

