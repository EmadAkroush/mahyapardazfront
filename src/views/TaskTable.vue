<template>
  <div class="ma-2">
    <p> جدول تسک ها </p>
    
    <div v-if="localdata">
        you are not login
    </div>
    <div v-else>

      <table>

        <thead>
          <tr>
            <th></th>
            <th class="ta-td"
              v-for="day in 30" :key="`task_user_head_${day}`">
              {{ day }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="`task_user_head_${user.id}`">
            <td>{{ user.name }} {{ user.family }}</td>
            <td v-for="day in 30"
             :key="`task_user_day_${day}`" class="ta-td">
             <span v-if="user.tasks.find(it => (+it.startdate.slice(8) <= day && +it.endtdate.slice(8) >= day))" class="green-tb">{{ user.name }} </span>

            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script >
import moment from 'jalali-moment';
import { useStore } from "vuex";
export default {
  data() {
    return {
      Users: null,
      Tasks: null,
      daytb: null,
      isActive: false,
      localdata : null,
    }
  },
  components: {

  },
  methods: {
    async getTask() {
      await this.$store.dispatch('showTask');
      // this.Tasks = this.$store.state.showTasks.map((user) => {
      //   return user.tasks

      // }
      // );
      console.log("tokenyyyyy table" , this.$store.state.loginToken );
      this.Users = this.$store.state.showTasks;
      console.log("fold table", this.Users);
      // for (let user of this.Users) {
      //   console.log('user   =========> ', user.name);
      //   user.tasks.forEach(it => {
      //       console.log('task => ', it.startdate, it.endtdate, it.startdate.slice(8), it.endtdate.slice(8));
      //   });
      // }
    },
    generateCalendar () {
      let calendar = [];
      moment.locale('fa');
      let start = moment().startOf('jMonth');
      // let end = moment().sendMonth();
      let diff = start.daysInMonth();

      // calendar[0] = start.format('YYYY/MM/DD');
      for (let i = 0;i < diff; i++) {
        calendar[i] = start.clone().add(i, 'day').format('YYYY/MM/DD');
      }

      console.log(calendar);

    },
    local(){
     if( localStorage.getItem("loginToken") == null ){
     this.localdata = true
     } else {
      console.log("gggggg" , localStorage.getItem("loginToken"));
      this.localdata = false
     }

    }

  },

  mounted() {
    this.getTask()
    this.generateCalendar();
    this.local();

  },


}

</script>
<style scoped>
.ta-td {
  border: 1px solid green;
  padding: 2px;
  width: 200px;
}
.green-tb {
  background-color: green;
}



</style>
ّ
