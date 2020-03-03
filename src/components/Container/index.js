import React from 'react'

import {Wrapper, ImageBackground} from './styles'

export default function Container({noHeader, children}) {
	return (
		<Wrapper noHeader={noHeader}>
			<ImageBackground />
			{children}
		</Wrapper>
	)
}
