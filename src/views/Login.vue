<template>
  <div class="ma-2">
    <v-sheet width="600" class="mx-auto mt-4">
     <div class="red"> {{ $store.state.userError }} </div>
      <v-form ref="form">

        نام کاربری
        <v-text-field v-model="form.username" :counter="10" :rules="[v => !!v || ' نام کابری الزامیست ']" label="نام کاربری "
          required></v-text-field>
        پسورد
        <v-text-field v-model="form.password" :counter="10"  type="password" :rules="[v => !!v ||  ' پس ورد  الزامیست ']"
          label="پس ورد" required></v-text-field>


        <v-btn color="success" class="c-btn mt-4" block @click="login">
         ورود
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
        username: null,
        password: null,

      }
    }
  },
  components: {

  },
  methods: {

    async login() {

      const { valid } = await this.$refs.form.validate()

      this.$store.dispatch('login', this.form);

      if (valid) alert('Form is valid')

    }
  },

  mounted() {

  }
}

</script>
<style scoped>
.red {
  color: red;
}
</style>
