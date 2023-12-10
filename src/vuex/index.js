import { createStore } from 'vuex'
import axios from 'axios'



const store = createStore({
  state: {
    loginToken: '',
    holddata: "emadakroush",
    users: ''

},
getters: {
    // allTasks(state) {
    //     return state.tasks
    // }
},
mutations: {
    setToken(state, loginToken) {
        state.loginToken = loginToken
    },
    setUers(state, users) {
      state.users = users
  },

},
actions: {

    async login({ commit  } , data) {

        try {
            // await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
            const response = await axios.post('http://127.0.0.1:8000/api/login'  , {
              username: 'admin',
              password: 'admin'
          })
            commit('setToken', response.data)

        } catch (error) {
           console.log(error);
        }
    },

    async users({ commit }) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users')
            commit('setUers', response.data)

        } catch (error) {
           console.log(error);
        }
    },

    async stroeTask({ commit }, title) {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: title,
                completed: false
            })
            commit('newTask', response.data)

            Swal.fire({
                title: "Task added",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There is a problem, please try again",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    },

    async updateTask({ commit }, task) {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                id: task.id,
                title: task.title,
                completed: !task.completed
            })

            commit('updateTask', response.data)

            Swal.fire({
                title: "Task Updated",
                icon: "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There is a problem, please try again",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    },

    async deleteTask({ commit }, id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

            commit('removeTask', id)

            Swal.fire({
                title: "Task Deleted",
                icon: "warning",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast: true,
                position: 'top',
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There is a problem, please try again",
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    },
}
});

export default store;
