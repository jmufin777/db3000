<template>
  <v-app id="inspire" >
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list dense >
        <v-list-tile @click="Status">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Status</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="Status">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Nastaveni</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>directions_run</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Odhlasit</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>DB 3000</v-toolbar-title>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        class="yellow accent-12 elevation-10"
        light
        small
        absolute
        right
        middle
        fab
        ripple
        v-my-tooltip.top-left="'Odhlasit'"
        @click="logout"
      >
     <v-icon>directions_run</v-icon>

      </v-btn>

    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
      <div class="pl-4 pr-4 pt-2 pb-2">
          <form-helper>
            <div>
              <h1 slot="a">Jsem slot Desktop A </h1>
              <p slot="b"> I'm Slot paragraf</p>
            </div>
          </form-helper>

        <v-dialog style="elevation-20"/>
      </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; db3000 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

// import Api from '@/services/Api'
import hw from './Blank.vue'
import {mapState} from 'vuex'

export default {
  components: {
    'form-helper': hw
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  methods: {
    Status: function () {
      alert('status')
    },
    logout () {
      this.$modal.show('dialog', {
        title: 'Upozorneni!',
        text: 'Budete odhlaseni',
        buttons: [
          {
            title: 'Odejit',
            handler: () => {
              this.$store.dispatch('setToken', null)
              this.$store.dispatch('setUser', null)
              this.$router.push({
                name: 'login'
              })
            }
          },
          {
            title: '',
            default: true, // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: 'Zpet'
          }
        ]
      })
    }
  },
  mounted () {
    if (!this.isUserLoggedIn) {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: yellow;
}
</style>
