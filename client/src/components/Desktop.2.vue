<template>
  <v-app id="inspire" >
  <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed

      app
      class="pb-0 elevation-10"
      stateless  >


      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Prehled</v-list-tile-title>
      </v-list-tile>
      <v-list-tile>
      <v-list-tile-action class="">
          <v-icon v-text="'shopping_basket'"></v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Zakázky</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          no-action
          sub-group
          value=""
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click="x=true"
          >
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group  sub-group   no-action  >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions
          </v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(crud, i) in cruds"  :key="i"  @click="x=true"
          >
            <v-list-tile-title v-text="crud[0]">
            </v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]">
              </v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
        </v-list-group>
    </v-list>

  </v-navigation-drawer>

      <v-toolbar app fixed clipped-left flat class="elevation-10" >
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
          <component v-bind:is="component"></component>
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

// import Api from '@/services/Api

import hw from './Blank.vue'
import testy from './_Testy/testy'
import VTreeview from 'v-treeview'
// import _ from 'lodash'
import {mapState} from 'vuex'

export default {
  components: {
    'form-helper': hw,
    'testy': testy
  },
  data: () => {
    return {
      drawer: true,
      component: '',

      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]

    }
  },
  props: {
    source: String
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ]),
    pocet: function () {
    //  alert(this.cruds)
      return this.admins.length
    }
  },
  methods: {
    Status: function () {
      alert('status')
    },
    testy () {
      this.$router.push({
        name: 'testy'
      })
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'login' })
    },
    malert (x) {
      alert(x)
      this.MainMenu.cruds.push(['xDel', 'alarm'])
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
