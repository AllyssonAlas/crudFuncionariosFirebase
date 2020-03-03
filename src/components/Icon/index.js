import React from 'react'
import {Image} from 'react-native'

import {Container} from './styles'

export default function Icon(props) {
  function image(name) {
    switch (name) {
      case 'arrow-left':
        return require('../../assets/icons/arrow-left.png')
      case 'arrow-right':
        return require('../../assets/icons/arrow-right.png')
      case 'home':
        return require('../../assets/icons/home.png')
      default:
        return false
    }
  }

  return (
    <Container {...props}>
      <Image source={image(props.name)}/>
    </Container>
  )
}

