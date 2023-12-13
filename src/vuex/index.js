import { createStore } from 'vuex'
import axios from 'axios'



const store = createStore({
  state: {
    loginToken: '',
    holddata: "emadakroush",
    users: '',
    userError: '',
    task: '',
    showTasks: ''

},
getters: {
     allTasks(state) {
         return state.showTasks
     }
},
mutations: {
    setToken(state, loginToken) {
        state.loginToken = loginToken
    },
    setTask(state, task) {
      state.task = task
  },
    setUers(state, users) {
      state.users = users
  },
    setUserError(state, userError) {
      state.userError = userError
  },
    setShowTask(state, showTasks) {
       state.showTasks = showTasks
},

},
actions: {

    async login({ commit  } , form) {

        try {
            // await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
            const response = await axios.post('http://127.0.0.1:8000/api/login'  , {
              username: form.username,
              password: form.password
          })
          console.log("the form data is " , response.data.error  );
            commit('setToken', response.data.access_token)

        } catch (error) {
           console.log("error" , error.response.data.error);
           commit('setUserError', error.response.data.error);

        }
    },

    async creatTask({ commit } , form) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/tasks'  , {
            user_id: 1,
            issue: form.issue,
            description: form.description,
            startdate: form.start,
            endtdate: form.end
        })
          commit('setTask', response.data)
          console.log("send the task", form);

        } catch (error) {
           console.log(error);
        }
    },



    async getUers({ commit }) {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/users')
        commit('setUers', response.data)

      } catch (error) {
         console.log(error);
      }
  },

  async showTask({ commit }) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/usertask')
      commit('setShowTask', response.data)

    } catch (error) {
       console.log(error);
    }
},




}
});

export default store;
