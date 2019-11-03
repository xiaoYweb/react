import axios from 'axios';


export default axios.create({
  baseURL: typeof window === 'undefined' ? 'http://192.168.0.63:3001' : ''
})