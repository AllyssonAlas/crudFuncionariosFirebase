import React from 'react'
import {useDispatch} from 'react-redux'

import Divider from '../../../components/Divider'
import Button from '../../../components/Button'

import * as EmployeeActions from '../../../store/modules/employee/actions'

import idFormatter from '../../utils/idFormatter'

import {
	Container,
	Header,
	Text,
	HeaderSection,
	Title,
	ButtonSection,
} from './styles'

export default function ListItem({employee}) {
	const dispatch = useDispatch()

	return (
		<Container>
			<Header>
				<HeaderSection small>
					<Text>{idFormatter(employee.id)}</Text>
				</HeaderSection>
				<HeaderSection>
					<Text>{employee.role}</Text>
				</HeaderSection>
			</Header>
			<Title>{employee.name}</Title>
			<Divider />
			<Text>Setor {employee.section}</Text>
			<Divider />
			<Text>{employee.email}</Text>
			<ButtonSection>
				<Button
					onPress={() =>
						dispatch(EmployeeActions.selectEmployeeRequest(employee.id))
					}
					title={'Perfil do funcionário'}
				/>
			</ButtonSection>
		</Container>
	)
}
