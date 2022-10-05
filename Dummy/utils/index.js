import axios from 'axios'

export const PublishDummyEvent=async()=>{
await axios.post('http://localhost:8000/dummy/app-events',{
    payload
})
}