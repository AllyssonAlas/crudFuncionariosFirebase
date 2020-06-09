import React, {useRef} from 'react'
import {Alert} from 'react-native'
import {Form} from '@unform/core'
import {MaskService} from 'react-native-masked-text'
import * as Yup from 'yup'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import Button from '../../components/Button'

import Input from './Input'
import {FormContainer, ButtonContainer} from './styles'

export default function NewRegister({navigation, route}) {
	const formRef = useRef(null)
	const {role, section} = route.params

	async function handleSubmit(data) {
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

			const form = {...data, section, role}

			navigation.navigate('RegisterConfirm', {form})
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
					<Icon name={'arrow-left'} onPress={() => navigation.popToTop()} />
				}
				subtitle={`Setor ${section}`}
				title={role}
			/>
			<FormContainer>
				<Form ref={formRef} onSubmit={handleSubmit}>
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
					<ButtonContainer>
						<Button
							onPress={() => navigation.goBack()}
							secondary
							title={'Cancelar'}
							warning
						/>
						<Button
							onPress={() => formRef.current.submitForm()}
							secondary
							success
							title={'Confirmar'}
						/>
					</ButtonContainer>
				</Form>
			</FormContainer>
		</Container>
	)
}
