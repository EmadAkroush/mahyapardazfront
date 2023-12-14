<template>
  <router-view />
</template>

<script >
 export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods: {

    async refresh() {
      await  this.$store.dispatch('me');



    },

  },

  mounted() {
   this.refresh()
  }
}
</script>
