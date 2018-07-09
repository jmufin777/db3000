<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
    >

<v-list  dense  >

    <v-list-tile  @click="menu_switch(menu_solo_1[3] )" >
     <v-list-tile-action >
       <v-icon>{{ menu_solo_1[1] }}</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title class="caption ">{{ menu_solo_1[0] }}</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>

   <v-list-tile  @click="menu_switch(menu_solo_2[3] )">
     <v-list-tile-action >
       <v-icon>{{ menu_solo_2[1] }}</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title class="caption">{{ menu_solo_2[0] }}</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>

   <v-list-tile  @click="menu_switch(menu_solo_3[3] )">
     <v-list-tile-action >
       <v-icon>{{ menu_solo_3[1] }}</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title class="caption">{{ menu_solo_3[0] }}</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>

    <v-list-group
        prepend-icon="pie_chart"
        value=""
    >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Prehledy</v-list-tile-title>
      </v-list-tile>

      <v-list-tile  v-for="(menu_set,iprehled) in menu_set_prehledy" :key="iprehled" @click="menu_switch(menu_set[3] )">
     <v-list-tile-content >
       <v-list-tile-title  class="caption">{{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>
     </v-list-tile-action>
    </v-list-tile>
    </v-list-group>

    <v-list-group
        prepend-icon="people_outline"
        value="true"
    >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Administrace</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        value="true"
        sub-group
      >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Technologie</v-list-tile-title>
          <v-icon>memory</v-icon>
      </v-list-tile>
      <v-list-tile  v-for="(menu_set,iprehled) in menu_set_firma" :key="iprehled" @click="menu_switch(menu_set[3] )">
     <v-list-tile-content >
       <v-list-tile-title  class="caption">{{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>
     </v-list-tile-action>
    </v-list-tile>
    </v-list-group>

    <v-list-group

        value=""
        sub-group

    >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Aplikace</v-list-tile-title>
          <v-icon red>computer</v-icon>
      </v-list-tile>

     <v-list-tile  v-for="(menu_set,iprehled) in menu_set_aplikace" :key="iprehled" @click="menu_switch(menu_set[3] )">
     <v-list-tile-content >
       <v-list-tile-title  class="caption">{{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>
     </v-list-tile-action>
    </v-list-tile>
    </v-list-group>
    </v-list-group>

<v-divider></v-divider>
       <v-list-group
        sub-group
        value=""
        >
        <v-list-tile slot="activator">
          <v-list-tile-title>Testy </v-list-tile-title>
          <v-icon red>block</v-icon>
        </v-list-tile>

   <v-list-tile @click="compa.push('form-helper')">
     <v-list-tile-action>
       <v-icon>settings</v-icon>
     </v-list-tile-action>
     <v-list-tile-content >
       <v-list-tile-title >Nastaveni 0</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>

  <v-list-group
        prepend-icon="account_circle"
        value=""
        sub-group
        >
        <v-list-tile slot="activator">
          <v-list-tile-title>Nastaveni3</v-list-tile-title>
        </v-list-tile>

   <v-list-tile @click="compa.push('testy')">
     <v-list-tile-action>
       <v-icon>wb_sunny</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title>Testy</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>
</v-list-group>

    </v-list-group>
    <v-divider></v-divider>
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
      <v-toolbar app fixed clipped-left >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="pa-0 ma-0">
        <v-card class="pa-0 ma-0">
          <v-card-text class="pa-0 ma-0">
            DB 3000
          </v-card-text>
        </v-card>
      </v-toolbar-title>
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
    <v-content >

      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6  v-for="(comp, i) in compa" :key="i" offset-xs{i}>
            <panel slot="title1" comp >
              <v-btn slot="action" @click="compa.splice(i,1)"
              class="silver elevation-1 pa-8 mr-8"
              light
              small
              relative
              right
              middle
              fab
              ripple
              >
              <v-icon small ripple>clear</v-icon></v-btn>
              <keep-alive>
               <component v-bind:is="comp"></component>
              </keep-alive>
              </panel>

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
import testy from './_Testy/testy'
import formFX from './_Testy/formFX'

import TestMenu from './_Testy/TestMenu'
import SetColor from './SetColor'
import SetWidth from './SetWidth'
import SetMaterial from './SetMaterial'

import {mapState} from 'vuex'

export default {
  components: {
    'form-helper': hw,
    'testy': testy,
    'test-menu': TestMenu,

    'set-color': SetColor,
    'set-width': SetWidth,
    'set-material': SetMaterial,
    'form-fx': formFX
  },

  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])

  },
  data: () => {
    return {
      drawer: true,
      props: {
        source: String
      },
      informace: '',
      component: '',
      compa: [],
      menu_solo_1: ['Muj přehled', 'trending_up', 'menu_switch', 'set-my-overview', 'true'],
      menu_solo_2: ['Kalkulace', 'iso', 'menu_switch', 'set-calc', 'true'],
      menu_solo_3: ['Zakazky', 'shopping_cart', 'menu_switch', 'set-zakazky', 'true'],

      menu_set_prehledy: [
        ['Prehledy 1', 'sort', 'menu_switch', 'prehled', 'true'],
        ['Stara DB', 'accessible', 'menu_switch', 'old-db', 'true'],
        ['FX', 'accessible', 'menu_switch', 'form-fx', 'true']
      ],

      menu_set_firma: [
        ['Barevnost', 'format_color_fill', 'menu_switch', 'set-color', 'true'],
        ['Sirky', 'code', 'menu_switch', 'set-width', 'true'],
        ['Materiály', 'texture', 'menu_switch', 'set-material', 'true']
      ],
      menu_set_aplikace: [
        ['Uzivatele', 'wc', 'menu_switch', 'users', 'true'],
        ['Moduly', 'view_module', 'menu_switch', 'moduly', 'true']
      ]
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
    menu_switch (par) {
      this.compa.push(par)
      this.informace = this.compa
      switch (par) {
        case 'set_calc':
          break
        case 'set_color':
          // this.component= 'set_color'
          break
        default:
          this.component = par
          break
      }
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({ name: 'login' })
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
