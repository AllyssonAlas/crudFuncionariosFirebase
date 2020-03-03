import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from 'yup'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Button from '../../components/Button'

import Input from './Input'
import {
	Body,
	Title,
	Subtitle,
	Section,
	HourSheetContainer,
	SmallButton,
	TextButton,
	ButtonContainer,
} from './styles'

import * as EmployeeActions from '../../store/modules/employee/actions'

export default function EmployeeInfo({navigation}) {
	const employee = useSelector(state => state.employee)
	const [errors, setErrors] = useState({
		birthDate: false,
		email: false,
		phone: false,
		admissionDate: false,
	})
	const dispatch = useDispatch()

	async function handleUpdateInfo(employee) {
		try {
			const schema = Yup.object().shape({
				birthDate: Yup.string()
					.required('Campo obrigatório')
					.length(10, 'Digite uma data válida'),
				email: Yup.string()
					.email('Digite um email válido')
					.required('Campo obrigatório'),
				phone: Yup.string()
					.required('Campo obrigatório')
					.min(14, 'Digite um número válido'),
				admissionDate: Yup.string()
					.required('Campo obrigatório')
					.length(10, 'Digite uma data válida'),
			})

			await schema.validate(employee, {
				abortEarly: false,
			})

			setErrors({
				birthDate: false,
				email: false,
				phone: false,
				admissionDate: false,
			})

			dispatch(EmployeeActions.updateInfoRequest(employee.id))
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				const errorPaths = {}

				err.inner.forEach(error => {
					errorPaths[error.path] = true
				})

				setErrors({
					birthDate: false,
					email: false,
					phone: false,
					admissionDate: false,
					...errorPaths,
				})
			}
		}
	}

	return (
		<Container>
			<Header
				leftComponent={
					<Icon name={'arrow-left'} onPress={() => navigation.goBack()} />
				}
				rightComponent={
					<Icon name={'home'} onPress={() => navigation.popToTop()} />
				}
				subtitle={`Id: 00${employee.id}`}
				title={employee.role}
			/>
			<Body>
				<Title>{employee.name}</Title>
				<Divider />
				<Subtitle>Setor {employee.section}</Subtitle>
				<Divider />
				<Subtitle>Contato</Subtitle>
				<Section>
					<Input
						label={'Telefone'}
						onChangeText={formatted =>
							dispatch(EmployeeActions.setInfo('phone', formatted))
						}
						options={{maskType: 'BRL', withDDD: true, dddMask: '(99) '}}
						type={'cel-phone'}
						value={employee.phone}
						error={errors.phone}
					/>
					<Input
						autoCapitalize={'none'}
						label={'Email'}
						onChangeText={formatted =>
							dispatch(EmployeeActions.setInfo('email', formatted))
						}
						value={employee.email}
						error={errors.email}
					/>
				</Section>
				<Divider />
				<Section>
					<Input
						label={'Data de Nascimento'}
						onChangeText={formatted =>
							dispatch(EmployeeActions.setInfo('birthDate', formatted))
						}
						options={{format: 'DD/MM/YYYY'}}
						type={'datetime'}
						value={employee.birthDate}
						error={errors.birthDate}
					/>
					<Input
						label={'Data de admissão'}
						onChangeText={formatted =>
							dispatch(EmployeeActions.setInfo('admissionDate', formatted))
						}
						options={{format: 'DD/MM/YYYY'}}
						type={'datetime'}
						value={employee.admissionDate}
						error={errors.admissionDate}
					/>
				</Section>
				<Divider />
				<Subtitle>Quadro de horas</Subtitle>
				<HourSheetContainer>
					<SmallButton
						onPress={() =>
							dispatch(
								EmployeeActions.setInfo('hoursBoard', employee.hoursBoard - 1),
							)
						}>
						<TextButton>-</TextButton>
					</SmallButton>
					<TextButton button>{employee.hoursBoard}</TextButton>
					<SmallButton
						onPress={() =>
							dispatch(
								EmployeeActions.setInfo('hoursBoard', employee.hoursBoard + 1),
							)
						}>
						<TextButton>+</TextButton>
					</SmallButton>
				</HourSheetContainer>
				<ButtonContainer>
					<Button
						onPress={() => handleUpdateInfo(employee)}
						success
						title={'Salvar Alterações'}
					/>
					<Button
						onPress={() =>
							dispatch(EmployeeActions.deleteEmployeeRequest(employee.id))
						}
						title={'Apagar Funcionário'}
						warning
					/>
				</ButtonContainer>
			</Body>
		</Container>
	)
}
