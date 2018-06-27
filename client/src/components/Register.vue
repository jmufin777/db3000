<template>
  <div>
    <h1>aaaaa</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <input type="password" name="password" placeholder="password" v-model="password">
    <button @click="register">RRRR</button>
  </div>
</template>

<script>
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      email: 'aaaaaa',
      password: 'xxswde'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.email)
    }, 20000)
  },
  methods: {
    register () {
      AuthService.login({
        email: this.email,
        password: this.password
      })
      console.log('Registr was click')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
