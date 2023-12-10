<template>
  <div class="ma-2">
    <v-btn class="">ثبت نام </v-btn>
    <v-btn class="mr-2" @click="mydata"> ایجاد تسک </v-btn>
    {{ store.state.users }}

  </div>
</template>

<script setup>
import { useStore } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'
const store = useStore();
function mydata(){
  // let data = {
  //   name : 'Emad',
  //   pass : 123456
  // }
  console.log("kol" , store.dispatch('login'));
}
</script>
