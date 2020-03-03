import firestore from '@react-native-firebase/firestore'

const employeesCollection = firestore().collection('employees')

export async function createNewEmployee(lastId, form) {
  const newId = typeof lastId !== 'string' ? 1 : (parseInt(lastId) + 1)
  await employeesCollection.doc(newId.toString()).set({
    admissionDate: form.admissionDate,
    birthDate: form.birthDate,
    email: form.email.trim(),
		hoursBoard: 0,
    id: newId,
    name:  form.name.trim(),
    phone: form.phone,
    role: form.role,
    section: form.section,
  })
}
