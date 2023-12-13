<template>
  <div class="ma-2">
    <p> جدول تسک ها </p>

    <div>
      <table>
        <tr v-for="(ta, item) in table" >
          <td>
          <tr v-for="(user, item) in Users">
          {{ user.username }}
        </tr>
        </td>
        <td>
          <th class="ta-td" v-for="(day , lom) in ta.day">
          {{  day }}
        </th>


          <tr v-for="(task, item) in Tasks">
             <span class="ta-td" v-for="(data, item) in task">

              {{ data.startdate.slice(8, 10)  }}
               <td >
                {{ data.startdate }}
               </td>
            </span>
          </tr>


        </td>

        </tr>

      </table>
    </div>

  </div>
</template>

<script >
import { useStore } from "vuex";
export default {
  data() {
    return {
      Users: null,
      Tasks: null ,
      daytb: null ,
      table: [
       {
        day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 , 26, 27, 28, 29 , 30]
       }
      ]
    }
  },
  components: {

  },
  methods: {
    async getTask() {
      await this.$store.dispatch('showTask');
      this.Tasks = this.$store.state.showTasks.map((user) => {
        return user.tasks

      }
      );
      this.Users = this.$store.state.showTasks;
      console.log("fold", this.Tasks);
    },

  },

  mounted() {
    this.getTask()
  },


}

</script>
<style scoped>
.ta-td {
  border: 1px solid green;
  padding: 2px;
}
</style>
ّ
