<template>
  <div class="ma-2">
    <router-link to="/login">
      <v-btn class=""> ورود </v-btn>
    </router-link>
    <router-link to="/createtask">
      <v-btn class="mr-2"> ایجاد تسک </v-btn>
    </router-link>
    <router-link to="/tasktable">
      <v-btn class="mr-2">  جدول تسک ها  </v-btn>
    </router-link>
    <v-btn class="mr-2" @click="mydata">   ها  </v-btn>

  </div>
</template>

<script setup>
import { useStore } from "vuex";
import HelloWorld from '@/components/HelloWorld.vue'

const store = useStore();
function mydata() {
  // let data = {
  //   name : 'Emad',
  //   pass : 123456
  // }
  // console.log("kol", store.dispatch('creatTask'));
  console.log("klllll");
  // setCookie("username", 'hhhh', 365);
  localStorage.setItem("lastname", "Smith");
}
</script>
