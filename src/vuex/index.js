import { createStore } from 'vuex'
import axios from 'axios'



const store = createStore({
  state: {
    loginToken: '',
    holddata: "emadakroush",
    users: '',
    userError: '',
    task: '',
    showTasks: '',
    logininter: false

},
getters: {
     allTasks(state) {
         return state.showTasks
     },
    getloginToken(state) {
        return state.loginToken
    },
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
setlogin(state, logininter) {
  state.logininter = logininter
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


            commit('setlogin', response.data.is_success);
            commit('setToken', response.data.access_token);
            console.log("the form data is " , response.data  );
            console.log("the form data is jjjjj " , this.getters.getloginToken  );
            localStorage.setItem("loginToken", this.getters.getloginToken);


        } catch (error) {
           console.log("error" , error.response.data.error);
           commit('setUserError', error.response.data.error);


        }
    },

    async me() {
      try {
          const response = await axios.get('http://127.0.0.1:8000/api/me', {
              headers: {
                  Authorization: `Bearer ${this.getters.getloginToken}`
              }
          })
          console.log("me",response.data)

      } catch (error) {
         console.log(error);
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
      const response = await axios.get('http://127.0.0.1:8000/api/usertask' , {
        headers: {
            Authorization: `Bearer  ${localStorage.getItem("loginToken")}`
        }
    })
    console.log("token" , this.getters.getloginToken );
      commit('setShowTask', response.data)

    } catch (error) {
       console.log(error);
    }
},




}
});

export default store;
