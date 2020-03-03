import firestore from '@react-native-firebase/firestore'

const employeesCollection = firestore().collection('employees')

export async function updateEmployee(id, employee) {
	await employeesCollection.doc(id.toString()).update({
		admissionDate: employee.admissionDate,
		birthDate: employee.birthDate,
		email: employee.email.trim(),
		hoursBoard: employee.hoursBoard,
		name:  employee.name.trim(),
		phone: employee.phone,
		role: employee.role,
		section: employee.section,
	})
}
