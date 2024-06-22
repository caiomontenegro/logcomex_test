import axios from 'axios'

const baseURL = 'https://logcomex-test-58861-default-rtdb.firebaseio.com/'

const api = axios.create({
  baseURL
})

export const getEmployess = async () => {
  try {
    const response = await api.get('/employees')
    const employees = response .data.documents. map(doc => {
      const fields = doc.fidels
      return {
        id: fields.id.integerValue,
        name: fields.name.stringValue,
        photo: fields.photo.stringValue,
        office: fields.office.stringValue,
        description: fields.description.stringValue
      }
    })
    return employees
  } catch (error) {
    console.error('Error to get employees, consult the devoper Caio Montenegro: caio.dev17@gmail.com', error)
  }
}