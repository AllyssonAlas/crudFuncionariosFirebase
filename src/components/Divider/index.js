import {Dimensions} from 'react-native'
import styled from 'styled-components/native'

const {height, width} = Dimensions.get('window')

const Divider = styled.View`
  background-color: rgba(128, 128, 128, 0.3);
  height: 2px;
  marginVertical: ${height * 0.012}px;
  width: ${width * 0.89}px;
`

export default Divider
