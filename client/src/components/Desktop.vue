<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
    >

  <v-list  dense color="pink" v-for="(xm, i ) in xMenu" :key="i" >

    <v-list-tile v-if="xm[0]=='polozka'" @click="Status" >
      <v-list-tile-content >
       <v-list-tile-title   >{{xm}} : {{ i }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon style="height:5px">code</v-icon>
     </v-list-tile-action>
    </v-list-tile>

  </v-list>

<v-list  dense class="pa-8 ma-8">
   <v-list-group
        prepend-icon="pie_chart"
        value=""
    >
      <v-list-tile slot="activator">
       <v-list-tile-title class="font-weight-black">Prehledy</v-list-tile-title>
      </v-list-tile>
    <draggable v-model="menu_set_1" :options="{group:'people'}">

    <v-list-tile  v-for="(menu_set,iprehled) in menu_set_1" :key="iprehled" @click="menu_switch(menu_set )" >
     <v-list-tile-content >
       <v-list-tile-title  class="caption">{{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>

     </v-list-tile-action>
    </v-list-tile>

    </draggable>

    </v-list-group>
    <v-list-group
        prepend-icon="people_outline"
        value="true"
        sub-group
    >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Administrace</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        value="true"
        sub-group
        prepend-icon="memory"
      >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Technologie</v-list-tile-title>
      </v-list-tile>
     <draggable v-model="menu_set_2" :options="{group:'people'}">
     <v-list-tile  v-for="(menu_set,iprehled) in menu_set_2" :key="iprehled" @click="menu_switch(menu_set )">
     <v-list-tile-content >
       <v-list-tile-title  class="caption"><span v-for="i in 20" :key="i">&nbsp;</span>  {{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>
     </v-list-tile-action>
    </v-list-tile>

    </draggable>

    </v-list-group>
    <v-divider></v-divider>

    <v-list-group
        value=""
        sub-group
    >
      <v-list-tile slot="activator">
          <v-list-tile-title class="font-weight-black">Aplikace</v-list-tile-title>
          <v-icon red>computer</v-icon>
      </v-list-tile>
     <draggable v-model="menu_set_3" :options="{group:'people'}">

     <v-list-tile  v-for="(menu_set,iprehled) in menu_set_3" :key="iprehled" @click="menu_switch(menu_set )">
     <v-list-tile-content >
       <v-list-tile-title  class="caption">{{ menu_set[0] }}</v-list-tile-title>
     </v-list-tile-content>
     <v-list-tile-action >
       <v-icon>{{ menu_set[1] }}</v-icon>
     </v-list-tile-action>
    </v-list-tile>

    </draggable>

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

        <v-list-tile @click="compa.push('testy')">
     <v-list-tile-action>
       <v-icon>wb_sunny</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title>Testy</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>

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
       <v-spacer></v-spacer>
  <el-radio-group v-model="radio2">
  <el-radio-button :label="1">A</el-radio-button>
  <el-radio-button :label="2">B</el-radio-button>
  <el-radio-button :label="3">C</el-radio-button>
  <el-radio-button :label="4">D</el-radio-button>
  <el-radio-button :label="5">E</el-radio-button>
  <el-radio-button :label="6">F</el-radio-button>
</el-radio-group>
<v-spacer></v-spacer>
<v-spacer></v-spacer>

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

   <v-container grid-list-md >
    <v-layout row wrap>
    <v-flex md2>
    <draggable v-model="menu_set_2" :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem">

    <v-card v-for="(element,i) in menu_set_2" :key="i" class="people pa-2 ma-2" :id="'a' + i" color="teal" >
        <v-card-text>{{element[0]}}</v-card-text>
    </v-card>

    <button slot="footer" @click="chooseItem">Add</button>

    </draggable>
    </v-flex>
    <v-flex md2>

    <draggable v-model="menu_set_3"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
    <v-card v-for="(element,i) in menu_set_3" :key="i" class="people pa-2 ma-2" :id="'b' + i" color="blue" >
        <v-card-text>{{element[0]}}</v-card-text>
    </v-card>

    <button slot="footer" @click="Pokus">Add</button>
    <button slot="footer" @click="xMenu=[]">Reset</button>

    </draggable>
    </v-flex>
    <v-flex md2>
      <v-card color="red" v-for="(xm0, i0 ) in xMenu" :key="'x0'+i0" >
        <v-card-text >{{xm0}}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4>
    <v-flex md12 v-for="(xm1, i ) in xMenu" :key="i">

      <v-card color="cyan"  v-if="xm1[10] > []" class="py-1 my-1">
        <v-flex md6>
          <v-card color="green">
            <v-card-text>Grup:{{xm1[0]}} : {{xm1[10].length }} : {{xm1[10]}}</v-card-text>



          </v-card>
        </v-flex>
      </v-card>

      <v-card color="cyan"  v-else class="py-1 my-1">
        <v-flex md6>
          <v-card color="green">
            <v-card-text>Item:{{xm1[0]}} : {{xm1[10].length }}</v-card-text>
          </v-card>
        </v-flex>
      </v-card>


    </v-flex>
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
import _ from 'lodash'
import { eventBus } from '@/main.js'
import hw from './Blank.vue'
import testy from './_Testy/testy'
import formFX from './_Testy/formFX'

import TestMenu from './_Testy/TestMenu'
import List2Barevnost from './List2Barevnost'
import ListUsers from './ListUsers'

import SetWidth from './SetWidth'
import SetMaterial from './SetMaterial'
import draggable from 'vuedraggable'

// import {ServerTable, ClientTable, Event} from 'vue-tables-2'
// npm install --save vue-tables-2

// Old
import old1 from './Old_1'

import {mapState} from 'vuex'

export default {
//  props: ['server'],
  components: {
    'form-helper': hw,
    'testy': testy,
    'test-menu': TestMenu,

    'set-color': List2Barevnost,
    'set-users': ListUsers,
    'set-width': SetWidth,
    'set-material': SetMaterial,
    'form-fx': formFX,

    'old-1': old1,
    'draggable': draggable
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
      select: 'Modul',
      comp_list: ['form-helper', 'testy', 'test-menu', 'set-color', 'set-users', 'set-width', 'set-material', 'form-fx', 'old-1'],
      activeName: 'first', // tabs pro el
      isCollapse: true,

      radio2: 6,

      informace: '',
      component: '',
      compa: [],
      aMenu: [],
      xMenu:[],
      menu_solo_1: [['Muj přehled', 'trending_up', 'menu_switch', 'set-my-overview', 'true']],
      menu_solo_2: [['Kalkulace', 'iso', 'menu_switch', 'set-calc', 'true']],
      menu_solo_3: [['Zakazky', 'shopping_cart', 'menu_switch', 'set-zakazky', 'true']],

      menu_solo_4: [{
        Nadpis: 'Muj přehled',
        Icona: 'trending_up',
        Akce: 'set-my-overview'
      }],

      menu_solo_5: [],
      menu_solo_6: [],
      menu_solo_7: [],

      menu_group_1: [{
        Nadpis: 'Admin',
        Ikona: 'code',
        Type: 'sub',
        Polozky: []
      }],
      menu_group_2: [['Admin2', 'code']],
      menu_group_3: [['Admin3', 'code']],
      menu_group_4: [],
      menu_group_5: [],
      menu_group_6: [],
      menu_group_7: [],
      menu_group_8: [],
      menu_group_9: [],

      menu_set_1: [
        ['Prehledy 1', 'sort', 'menu_switch', 'prehled', 'true'],
        ['Stara DB', 'accessible', 'menu_switch', 'old-1', 'true', 'window']
        // ['FX', 'accessible', 'menu_switch', 'form-fx', 'true']
      ],
      menu_set_2: [
        ['Barevnost', 'format_color_fill', 'menu_switch', 'set-color', 'true'],
        ['Sirky', 'code', 'menu_switch', 'set-width', 'true'],
        ['Materiály', 'texture', 'menu_switch', 'set-material', 'true'],
        ['Stroje', 'texture', 'menu_switch', 'set-material', 'true']
      ],
      menu_set_3: [
        ['Uzivatele', 'wc', 'menu_switch', 'set-users', 'true'],
        ['Moduly', 'view_module', 'menu_switch', 'moduly', 'true'],
        ['Neco', 'view_module', 'menu_switch', 'moduly', 'true'],
        ['Neco2', 'view_module', 'menu_switch', 'moduly', 'true'],
        ['Neco3', 'view_module', 'menu_switch', 'moduly', 'true']
      ],
      menu_empty: [
        ['Popisek', 'ikona', 'menu_switch', 'modul_name', 'true']
      ],
      menu_empty_group: [
        ['Popisek', 'ikona']
      ]
    }
  },

  methods: {
    Status: function () {
      alert('status')
    },
    Pokus: function () {

      var aEmpty  = Array(11)
      var aEmpty2 = Array(11)
        aEmpty[0]='a 0x'
        aEmpty[1]='a 0x'
        aEmpty[2]='a 0x'
        aEmpty[9] = 'Item'
        aEmpty[10] = []
        this.xMenu.push(aEmpty)

        aEmpty = Array(11)
        aEmpty[0]='a 2x'
        aEmpty[1]='a 2x'
        aEmpty[2]='a 2x'
        aEmpty[9] = 'Item'
        aEmpty[10] = []
        this.xMenu.push(aEmpty)
        aEmpty = Array(11)
        aEmpty2 = Array(11)
        aEmpty[0]='b'
        aEmpty[1]='b 1'
        aEmpty[2]='c 2'
        aEmpty[9] = 'Group'
        aEmpty[10]=[]
        aEmpty2[0] = 'b-1'
        aEmpty2[1] = 'b-s1'
        aEmpty2[3] = 'b-sx1'
        aEmpty2[9] = 'Item'
        aEmpty2[10]=[]
        aEmpty[10].push(aEmpty2)
        aEmpty2 = Array(11)
        aEmpty2[0] = 'B-1'
        aEmpty2[1] = 'B-s1'
        aEmpty2[3] = 'B-sx1'
        aEmpty2[9] = 'Item'
        aEmpty2[10]=[]
        aEmpty[10].push(aEmpty2)



        this.xMenu.push(aEmpty)
        aEmpty = Array(11)
        aEmpty2 = Array(11)
        aEmpty[0]='c'
        aEmpty[1]='c 1'
        aEmpty[2]='c 2'
        aEmpty[9] = 'Group'
        aEmpty[10]=[]
        aEmpty2[0] = 'C-1'
        aEmpty2[1] = 'C-s1'
        aEmpty2[3] = 'C-sx1'
        aEmpty2[9] = 'Item'
        aEmpty2[10]=[]
        aEmpty[10].push(aEmpty2)




        this.xMenu.push(aEmpty)
        aEmpty = Array(11)
        aEmpty2 = Array(11)
        aEmpty[0]='c 2'
        aEmpty[1]='c 1'
        aEmpty[2]='c 2'
        aEmpty[9] = "Group"
        aEmpty[10]=[]
        aEmpty2[0] = 'C-3'
        aEmpty2[1] = 'C-s1'
        aEmpty2[3] = 'C-sx1'
        aEmpty2[9] = 'Item'
        aEmpty2[10]=[]

        aEmpty[10].push(aEmpty2)




        this.xMenu.push(aEmpty)


    },

    chooseItem: function (event, bEvent) {
      console.log('Choos item: ', event.draggedRect, 'B', bEvent)


      //alert(Object.keys(bEvent))
    },
    testy () {
      this.$router.push({
        name: 'testy'
      })
    },
    getMenu () {
      this.aMenu.push({'menu_set1': this.menu_set_1})
    },
    menu_switch (par) {


      if (par.length >= 6) {
        if (par[5] === 'window') {
          let route = this.$router.resolve({ name: par[3] })
          // let route = this.$router.resolve('/link/to/page'); // This also works.
          window.open(route.href, 'Old_1', 'width=800')
          return
        }
      }
      // return
      this.compa.push(par[3])
      this.compa = _.uniqBy(this.compa)

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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    add () {
      alert('111')

      this.getMenu()
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

<style lang="stylus">
  #example-custom-transition
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
<style>
.list-complete-item {
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 1s;
}

.list-complete-enter, .list-complete-leave-active {
  opacity: 0;
}
</style>
