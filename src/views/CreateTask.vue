<template>
  <div class="ma-2">
    <v-sheet width="600" class="mx-auto mt-4">
      <v-form ref="form">
        گیرنده تسک
        <v-select v-model="form.user" :items="this.$store.state.users" :rules="[v => !!v || 'انتخاب گیرنده الزامیست ']"
          label=" گیرنده تسک" required></v-select>
        موضوع
        <v-text-field v-model="form.issue" :counter="10" :rules="[v => !!v || ' موضوع الزامیست ']" label="موضوع"
          required></v-text-field>
        توضیحات
        <v-text-field v-model="form.description" :counter="10" :rules="[v => !!v || ' توضیحات  الزامیست ']"
          label="توضیحات" required></v-text-field>
        شروع
        <date-picker v-model="form.start"></date-picker>
        پایان
        <date-picker v-model="form.end"></date-picker>

        <v-btn color="success" class="c-btn mt-4" block @click="sendTask">
          ایجاد تسک
        </v-btn>

      </v-form>
    </v-sheet>




  </div>
</template>

<script >
import { useStore } from "vuex";
export default {
  data() {
    return {
      form: {
        user: null,
        issue: null,
        description: null,
        start: null,
        end: null
      }
    }
  },
  components: {

  },
  methods: {
    getUsers() {
      this.$store.dispatch('getUers')

    },
    async sendTask() {

      const { valid } = await this.$refs.form.validate()

      this.$store.dispatch('creatTask', this.form);

      if (valid) alert('Form is valid')

    }
  },

  mounted() {
    this.getUsers()
  }
}

</script>
