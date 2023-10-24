import { ControlPointOutlined } from '@mui/icons-material';
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com'

const controller = new AbortController();
export const getUsers = async () => { 
    const { data } = await axios.get(`${url}/users`,{signal : controller.signal});
    return data;
}
