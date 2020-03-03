import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

export const Container = styled.View`
  background-color: rgba(246, 130, 13, 1);
  elevation: ${15};
  flex-direction: row;
  height: ${height * 0.12}px;
  width: ${width}px;
`

export const SideComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${width * 0.14}px;
`

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`

export const Subtitle = styled(Title)`
  font-size: 18px;
  font-weight: normal;
`

export const TitleContainer = styled(SideComponentContainer)`
  width: ${width * 0.72}px;
`
