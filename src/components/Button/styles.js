import {Dimensions} from 'react-native'
import styled from 'styled-components/native'
import {css} from 'styled-components'

const {height, width} = Dimensions.get('window')

export const Container = styled.TouchableOpacity`
   align-items: center;
   background-color: rgba(246, 130, 13, 1);
   ${props => props.warning && css`background-color: rgba(255, 0, 0, 1)`};
   ${props => props.success && css`background-color: rgba(25, 184, 14, 1)`};
   border-radius: 10px;
   elevation: ${7};
   height: ${props => props.secondary ? (height * 0.09) : (height * 0.1)}px;
   justify-content: center;
   width: ${props => props.secondary ? (width * 0.45) : (width * 0.85)}px;
`

export const Title = styled.Text`
  color: rgba(255, 255, 255, 1);
  font-size: 26px;
`
