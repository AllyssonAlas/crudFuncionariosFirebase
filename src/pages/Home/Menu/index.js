import React, {useState} from 'react'
import {BackHandler} from 'react-native'

import Button from '../../../components/Button'

export default function Menu({navigation}) {
	const [mainMenu, setMenu] = useState(true)

	function handleRoleSelection(role, section) {
		navigation.navigate('Register', {role, section})
		setMenu(true)
	}

	if (mainMenu === false) {
		return (
			<>
				<Button
					onPress={() =>
						handleRoleSelection('Analista de Marketing', 'Comercial')
					}
					title={'Analista de Marketing'}
				/>
				<Button
					onPress={() =>
						handleRoleSelection('Analista de RH', 'Recursos Humanos')
					}
					title={'Analista de RH'}
				/>
				<Button
					onPress={() =>
						handleRoleSelection('Gerente de Projetos', 'Administrativo')
					}
					title={'Gerente de Projetos'}
				/>
				<Button
					onPress={() => handleRoleSelection('Programador', 'Operacional')}
					title={'Programador'}
				/>
				<Button onPress={() => setMenu(true)} title={'Voltar'} />
			</>
		)
	}
	return (
		<>
			<Button onPress={() => setMenu(false)} title={'Novo Funcionário'} />
			<Button
				onPress={() => navigation.navigate('StaffList')}
				title={'Quadro de Funcionários'}
			/>
			<Button onPress={() => BackHandler.exitApp()} title={'Sair'} />
		</>
	)
}
