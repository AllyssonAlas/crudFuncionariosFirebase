import React, {useRef, useEffect, useState} from 'react'
import {Alert} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import {Form} from '@unform/core'
import {MaskService} from 'react-native-masked-text'
import * as Yup from 'yup'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Divider from '../../components/Divider'
import Input from '../../components/Input'
import Button from '../../components/Button'

import * as EmployeeActions from '../../store/modules/employee/actions'

import idFormatter from '../utils/idFormatter'

import {
	Body,
	Title,
	Label,
	HourSheetContainer,
	SmallButton,
	TextButton,
	ButtonContainer,
} from './styles'

export default function EmployeeInfo ({navigation}) {
	const formRef = useRef(null)

	const employee = useSelector(state => state.employee)
	const dispatch = useDispatch()

	const [hoursBoard, setHoursBoard] = useState(employee.hoursBoard)

	useEffect(() => {
		setTimeout(() => {
			formRef.current.setData({
				name: employee.name,
				birthDate: employee.birthDate,
				email: employee.email,
				phone: employee.phone,
				admissionDate: employee.admissionDate,
			})
		}, 0)
	}, [])

	function handleDelete (id) {
		Alert.alert(
			'Tem certeza que deseja apagar o funcionário?',
			'Não há volta.',
			[
				{text: 'Não'},
				{
					text: 'Sim',
					onPress: () => dispatch(EmployeeActions.deleteEmployeeRequest(id)),
				},
			],
		)
	}

	async function handleUpdateInfo (data) {
		try {
			const schema = Yup.object().shape({
				name: Yup.string().required('Campo obrigatório'),
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

			await schema.validate(data, {
				abortEarly: false,
			})

			const newInfo = {...employee, ...data, hoursBoard}

			dispatch(EmployeeActions.updateInfoRequest(employee.id, newInfo))

			Alert.alert('Concluído', 'Informação atualizadas com sucesso.', [
				{text: 'Ok'},
				{
					text: 'Voltar para tela anterior',
					onPress: () => navigation.goBack(),
				},
				{
					text: 'Voltar para tela inicial',
					onPress: () => navigation.popToTop(),
				},
			])
		} catch (err) {
			if (err instanceof Yup.ValidationError) {
				Alert.alert(
					'Há campos não preenchidos corretamente',
					'Verifique os campos em vermelho.',
					[{text: 'Ok'}],
				)

				const errorMessages = {}

				err.inner.forEach(error => {
					errorMessages[error.path] = error.message
				})

				formRef.current.setErrors(errorMessages)
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
				subtitle={`Id: ${idFormatter(employee.id)}`}
				title={employee.role}
			/>
			<Body>
				<Title> Setor {employee.section}</Title>
				<Divider />
				<Form ref={formRef} onSubmit={handleUpdateInfo}>
					<Input label={'Nome:'} name={'name'} />
					<Input
						keyboardType={'numeric'}
						onChangeText={text => {
							const formatted = MaskService.toMask('datetime', text, {
								format: 'DD/MM/YYYY',
							})
							formRef.current.setFieldValue('birthDate', formatted)
						}}
						label={'Data de Nascimento:'}
						name={'birthDate'}
						maxLength={10}
						placeholder={'DD/MM/AAAAA'}
					/>
					<Input
						keyboardType={'email-address'}
						autoCapitalize={'none'}
						label={'Email:'}
						name={'email'}
					/>
					<Input
						keyboardType={'numeric'}
						label={'Telefone:'}
						name={'phone'}
						onChangeText={text => {
							const formatted = MaskService.toMask('cel-phone', text, {
								maskType: 'BRL',
								withDDD: true,
								dddMask: '(99) ',
							})
							formRef.current.setFieldValue('phone', formatted)
						}}
						maxLength={15}
					/>
					<Input
						keyboardType={'numeric'}
						label={'Data de Ingresso:'}
						name={'admissionDate'}
						onChangeText={text => {
							const formatted = MaskService.toMask('datetime', text, {
								format: 'DD/MM/YYYY',
							})
							formRef.current.setFieldValue('admissionDate', formatted)
						}}
						maxLength={10}
						placeholder={'DD/MM/AAAAA'}
					/>
					<Label>Quadro de horas</Label>
					<HourSheetContainer>
						<SmallButton onPress={() => setHoursBoard(hoursBoard - 1)}>
							<TextButton>-</TextButton>
						</SmallButton>
						<TextButton button>{hoursBoard}</TextButton>
						<SmallButton onPress={() => setHoursBoard(hoursBoard + 1)}>
							<TextButton>+</TextButton>
						</SmallButton>
					</HourSheetContainer>
				</Form>
				<ButtonContainer>
					<Button
						onPress={() => formRef.current.submitForm()}
						success
						title={'Salvar Alterações'}
					/>
					<Button
						onPress={() => handleDelete(employee.id)}
						title={'Apagar Funcionário'}
						warning
					/>
				</ButtonContainer>
			</Body>
		</Container>
	)
}
