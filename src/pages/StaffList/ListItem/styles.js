import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  elevation: ${3};
  height: ${height * 0.45}px;
  margin-top: ${width * 0.025}px;
  width: ${width * 0.95}px;
`

export const Header = styled.View`
	align-items: center;
  flex-direction: row;
  height: ${height * 0.08}px;
  justify-content: space-evenly;
  width: ${width * 0.95}px;
`

export const HeaderSection = styled.View`
  justify-content: center;
  width: ${props => props.small ? (width * 0.29) : (width * 0.66)}px;
`

export const Text = styled.Text`
  color: rgba(128, 128, 128, 1);
  font-size: 20px;
  margin-bottom: ${height * 0.005}px;
  text-align: center;
`

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

export const ButtonSection = styled.View`
	padding-top: ${height * 0.02}px;
`
