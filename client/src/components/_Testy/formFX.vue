<template>
  <v-container fluid class="pt-0 mt-0 caption">
    <v-layout wrap>
      {{ info }}
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      info: ''
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>
<style scoped>

</style>
