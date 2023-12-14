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

       {{ this.$store.state.logininter }}
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

      },
      logininterme : null
    }
  },
  components: {

  },
  methods: {

    async login() {

      const { valid } = await this.$refs.form.validate()

      await  this.$store.dispatch('login', this.form);

         this.logininterme = await this.$store.state.logininter;
         console.log("jjj" ,  this.$store.state.logininter);
        if( this.logininterme == true){
        this.$router.push('/');
      }

    },
    inter(){
      this.$router.push('/');
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
