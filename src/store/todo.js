import axios from "axios"
import { makeAutoObservable } from "mobx"
import { API } from "../Halpers/api"

class Todo {

    todos = []
    edit = {} 
    
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }
    async addTodo(todo) {
        try {
            await axios.post(API, todo)
            this.todos.push(todo)
        } catch (error) {
            console.log(error);
        }
    }
    async removeTodo(id) {
        try {
            await axios.delete(`${API}/${id}`) 
            this.fetchTodos()
        } catch (error) {
            console.log(error); 
        }
    }
    async fetchTodos () {
        try {
            const res =  await axios.get(`${API}/${window.location.search}`)
            this.todos = [...res.data]
        } catch (error) {
          console.log(error);  
        }
    }
    async editTodos (id) {
        try {
            const res = await axios.get(`${API}/${id}`)
            this.edit = res.data  
        } catch (error) {
           console.log(error); 
        }
    }
    async saveEdited (id, value) {
        try {
            await axios.patch(`${API}/${id}`, value)
            this.fetchTodos()
        } catch (error) {
           console.log(error); 
        }
    }
    
}
export default new Todo()