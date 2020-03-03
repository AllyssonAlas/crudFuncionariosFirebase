import firestore from '@react-native-firebase/firestore'

const employeesCollection = firestore().collection('employees')

export async function getLastId() {
	return await employeesCollection
		.orderBy('id', 'desc')
		.limit(1)
		.get()
		.then(snapshot => snapshot.docs[0].id)
		.catch(() => 0)
}

export async function getCollection() {
	const data = []
	await employeesCollection
		.orderBy('id', 'asc')
		.get()
		.then(
			querySnapshot => {
				querySnapshot.forEach( doc => data.push(doc.data()))
			}
		)
	return data
}
