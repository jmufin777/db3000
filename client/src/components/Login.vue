<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-top justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Prihlaseni</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field v-model='login' prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Heslo"  type="password"></v-text-field>
                  {{ password }} aaaaa
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login2" color="primary">Prihlaseni</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
  data () {
    return {
      drawer: null,
      login: 'login',
      password: 'hoslo',
      error: null
    }
  },
  props: {
    source: String
  },
  // mounted () {
  //   this.$router.push({
  //     name: 'pokus3'
  //   })
  // },
  methods: {
    async login2 () {
      try {
        const resp = await AuthService.login({
          login: this.login,
          password: this.password
        })
        // this.$store.dispatch('setToken', resp.data.token)
        // this.$store.dispatch('setUser', resp.data.user)

        this.$router.push({
          name: 'desktop'
        })
      } catch (error) {
        this.error = error.resp.data.error
      }
    }
  }

}
</script>
