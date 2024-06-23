import axios from 'axios';

const baseURL = 'https://logcomex-test-58861-default-rtdb.firebaseio.com/'

const api = axios.create({
  baseURL,
});

export const getEmployees = async () => {
  try {
    const response = await api.get('/employees.json')
    const employees = Object.keys(response.data).map(key => {
      const employee = response.data[key];
      return {
        id: key,
        name: employee.name,
        photo: employee.photo,
        office: employee.office,
        description: employee.description,
      };
    });
    return employees;
  } catch (error) {
    console.error('Error to get employees, consult the developer Caio Montenegro: caio.dev17@gmail.com', error)
  }
};