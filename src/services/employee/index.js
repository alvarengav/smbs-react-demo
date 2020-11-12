import axios from 'axios'

const fetchEmployees = async () => {
    try {
        const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        return data
    } catch (error) {
        return []
    }
}

export default fetchEmployees