import React from 'react'
import {useSelector} from 'react-redux'

import {Container, Image, TextContainer, Text, ImageCopyright} from './styles'

export default function Card({image}) {
	const {loading, message} = useSelector(state => state.collection)

	function selectImage(imageName) {
		switch (imageName) {
			case 'empty-box':
				return require('../../assets/images/empty-box.png')
			case 'loading':
				return require('../../assets/gifs/loading.gif')
			case 'success':
				return require('../../assets/images/success.png')
			default:
				return false
		}
	}

	return (
		<Container>
			<Image source={selectImage(loading ? 'loading' : image)} />
			<TextContainer>
				<Text>{message}</Text>
			</TextContainer>
			<ImageCopyright>Icon from www.flaticon.com </ImageCopyright>
		</Container>
	)
}
