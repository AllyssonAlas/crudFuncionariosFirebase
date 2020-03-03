import firestore from '@react-native-firebase/firestore'

const employeesCollection = firestore().collection('employees')

export async function deleteEmployee(id) {
	await employeesCollection.doc(id.toString()).delete()
}
