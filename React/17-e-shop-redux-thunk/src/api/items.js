import axios from 'axios'
const baseURL ='http://localhost:3000/api/'

const api=axios.create({baseURL})

const itemsOperations={
    getItems:() => {
        return api.get('/items')
    },
    deleteItem:(id) => {
        return api.delete(`/items/${id}`)
    },
    saveItem:(item) => {
        return api.post('/items',item)
    }
}
export default itemsOperations;