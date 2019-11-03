import axios from 'axios';


export default axios.create({
  baseURL: typeof window === 'undefined' ? 'http://localhost:3001' : ''
})