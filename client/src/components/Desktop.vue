<template >

  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
    >



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

    <v-flex lg1>
    <draggable v-model="menu_set_3"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
    <v-card v-for="(element,i) in menu_set_3" :key="i" class="people pa-2 ma-2" :id="'b' + i" color="blue" >
        <v-card-text>{{element[0]}}</v-card-text>
    </v-card>
    </draggable>
    <draggable v-model="menu_set_2" :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem">
    <v-card v-for="(element,i) in menu_set_2" :key="i" class="people pa-2 ma-2" :id="'a' + i" color="teal" >
        <v-card-text>{{element[0]}}</v-card-text>
    </v-card>
    </draggable>



    <button slot="footer" @click="Add2">Add2</button>
    <button slot="footer" @click="xMenu=[]">Reset</button>


    </v-flex>

    <v-flex md4  >
      <div class="elevation-20 g0" style="height:100%;overflow-y:scroll" >
              menu demo
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
      right
    >
    <v-list  dense class="pa-8 ma-8">

      <draggable v-model="xMenu"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
       <span v-for="(xm0, j ) in xMenu" :key="j"  >
      <v-list-group v-if="xm0[9]=='Group'"  value="1"     :prepend-icon="xm0[1]" class="g0">
      <v-list-tile slot="activator">
      <v-list-tile-title class="font-weight-black">
        G {{ xm0[0] }}
        </v-list-tile-title>
      </v-list-tile><!-- Sem dalsi //-->

        <draggable v-model="xm0[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
        <span v-for="(xm1, j1 ) in xm0[10]" :key="j1"  >
        <v-list-group v-if="xm1[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm1[1]" class="g1">
        <v-list-tile slot="activator">
        <v-list-tile-title class="font-weight-black">G {{ xm1[0] }}</v-list-tile-title>
        </v-list-tile><!-- Sem dalsi //-->
            <draggable v-model="xm1[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
            <span v-for="(xm2, j2 ) in xm1[10]" :key="j2"  >
            <v-list-group v-if="xm2[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm2[1]" class="g2">
            <v-list-tile slot="activator">
            <v-list-tile-title class="font-weight-black">G {{ xm2[0] }}</v-list-tile-title>
            </v-list-tile><!-- Sem dalsi //-->

              <draggable v-model="xm2[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
              <span v-for="(xm3, j3 ) in xm2[10]" :key="j3"  >
              <v-list-group v-if="xm3[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm3[1]" class="g3">
              <v-list-tile slot="activator">
              <v-list-tile-title class="font-weight-black">G {{ xm3[0] }}</v-list-tile-title>
              </v-list-tile><!-- Sem dalsi //-->

                    <draggable v-model="xm3[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
                    <span v-for="(xm4, j4 ) in xm3[10]" :key="j4"  >
                    <v-list-group v-if="xm4[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm4[1]" class="g4">
                    <v-list-tile slot="activator">
                    <v-list-tile-title class="font-weight-black">G {{ xm4[0] }}</v-list-tile-title>
                    </v-list-tile><!-- Sem dalsi //-->

                          <draggable v-model="xm4[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
                          <span v-for="(xm5, j5 ) in xm4[10]" :key="j5"  >
                          <v-list-group v-if="xm5[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm5[1]" class="g5">
                          <v-list-tile slot="activator">
                          <v-list-tile-title class="font-weight-black">G {{ xm5[0] }}</v-list-tile-title>
                          </v-list-tile><!-- Sem dalsi //-->

                            <draggable v-model="xm5[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
                            <span v-for="(xm6, j6 ) in xm5[10]" :key="j6"  >
                            <v-list-group v-if="xm6[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm6[1]" class="g6">
                            <v-list-tile slot="activator">
                            <v-list-tile-title class="font-weight-black">G {{ xm6[0] }}</v-list-tile-title>
                            </v-list-tile><!-- Sem dalsi //-->
                            </v-list-group>
                            <v-list-tile v-if="xm6[9]=='Item'" @click="Status" class="i6">
                            <v-list-tile-action v-if="xm6[8]=='left'"><v-icon style="height:105px">{{xm6[1]}}</v-icon></v-list-tile-action>
                            <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 60" :key="x">&nbsp;</span>{{ xm6[0] }} : {{ j4 }}</v-list-tile-title></v-list-tile-content>
                            <v-list-tile-action v-if="xm6[8]=='right' ||  xm6[8]== ''"><v-icon style="height:105px">{{xm6[1]}}</v-icon></v-list-tile-action>
                            </v-list-tile>
                            </span>
                            </draggable>

                          </v-list-group>
                          <v-list-tile v-if="xm6[9]=='Item'" @click="Status" class="i5">
                          <v-list-tile-action v-if="xm5[8]=='left'"><v-icon style="height:105px">{{xm5[1]}}</v-icon></v-list-tile-action>
                          <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 60" :key="x">&nbsp;</span>{{ xm5[0] }} : {{ j4 }}</v-list-tile-title></v-list-tile-content>
                          <v-list-tile-action v-if="xm5[8]=='right' ||  xm5[8]== ''"><v-icon style="height:105px">{{xm5[1]}}</v-icon></v-list-tile-action>
                          </v-list-tile>
                          </span>
                          </draggable>

                    </v-list-group>
                    <v-list-tile v-if="xm4[9]=='Item'" @click="Status" class="i4">
                    <v-list-tile-action v-if="xm4[8]=='left'"><v-icon style="height:105px">{{xm4[1]}}</v-icon></v-list-tile-action>
                    <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 60" :key="x">&nbsp;</span>{{ xm4[0] }} : {{ j4 }}</v-list-tile-title></v-list-tile-content>
                    <v-list-tile-action v-if="xm4[8]=='right' ||  xm4[8]== ''"><v-icon style="height:105px">{{xm4[1]}}</v-icon></v-list-tile-action>
                    </v-list-tile>
                    </span>
                    </draggable>

              </v-list-group>
              <v-list-tile v-if="xm3[9]=='Item'" @click="Status" class="i3">
              <v-list-tile-action v-if="xm3[8]=='left'"><v-icon style="height:105px">{{xm3[1]}}</v-icon></v-list-tile-action>
              <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 60" :key="x">&nbsp;</span>{{ xm3[0] }} : {{ j3 }}</v-list-tile-title></v-list-tile-content>
              <v-list-tile-action v-if="xm3[8]=='right' ||  xm3[8]== ''"><v-icon style="height:105px">{{xm3[1]}}</v-icon></v-list-tile-action>
              </v-list-tile>
              </span>
              </draggable>

            </v-list-group>
            <v-list-tile v-if="xm2[9]=='Item'" @click="Status" class="i2">
            <v-list-tile-action v-if="xm2[8]=='left'"><v-icon style="height:105px">{{xm2[1]}}</v-icon></v-list-tile-action>
            <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 20" :key="x">&nbsp;</span>{{ xm2[0] }} : {{ j2 }}</v-list-tile-title></v-list-tile-content>
            <v-list-tile-action v-if="xm2[8]=='right' ||  xm2[8]== ''"><v-icon style="height:105px">{{xm2[1]}}</v-icon></v-list-tile-action>
            </v-list-tile>
            </span>
            </draggable>
        </v-list-group>
        <v-list-tile v-if="xm1[9]=='Item'" @click="Status" class="i1">
        <v-list-tile-action v-if="xm1[8]=='left'"><v-icon style="height:105px">{{xm1[1]}}</v-icon></v-list-tile-action>
        <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 20" :key="x">&nbsp;</span>{{ xm1[0] }} : {{ j1 }}</v-list-tile-title></v-list-tile-content>
        <v-list-tile-action v-if="xm1[8]=='right' ||  xm1[8]== ''"><v-icon style="height:105px">{{xm1[1]}}</v-icon></v-list-tile-action>
        </v-list-tile>
        </span>
        </draggable>

      </v-list-group>
      <v-list-tile v-if="xm0[9]=='Item'" @click="Status" class="i0">
      <v-list-tile-action v-if="xm0[8]=='left'"><v-icon style="height:105px">{{xm0[1]}}</v-icon></v-list-tile-action>
      <v-list-tile-content ><v-list-tile-title   ><span v-for="x0 in 0" :key="x0">&nbsp;</span>{{ xm0[0] }} : {{ j }}</v-list-tile-title></v-list-tile-content>
      <v-list-tile-action v-if="xm0[8]=='right' || xm0[8]=='' "><v-icon style="height:105px">{{xm0[1]}}</v-icon></v-list-tile-action>
      </v-list-tile>
      </span>
      </draggable>

    </v-list>
    </v-navigation-drawer>
     </div>
    </v-flex>




    <v-flex md6 >
      <div class="elevation-20 teal" style="height:100%;overflow:scroll;position: relative" >

      <v-card color="white">

         <ul>
            <draggable v-model="xMenu"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
            <li v-for="(xm0, i0) in xMenu" :key="'x'+i0"  >
              <div v-if="xm0[10].length>0" class="g0">
                g - {{xm0[0]}} <v-icon>{{ xm0[0][1] }}</v-icon>

                <ul>
                <draggable v-model="xm0[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                <li v-for="(xm1, i1) in xm0[10]" :key="'x'+i1"  >
                  <div v-if="xm1[10].length>0" class="g1">
                    1 g - {{i1+1}} >>
                    i - {{xm1[0]}} <v-icon>{{ xm1[1] }}</v-icon>

                   <ul>
                  <draggable v-model="xm1[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                  <li v-for="(xm2, i2) in xm1[10]" :key="'x'+i2"  >
                    <div v-if="xm2[10].length>0" class="g2">
                      2 g - {{i2+1}} >>>
                      i - {{xm2[0]}} <v-icon>{{ xm2[1] }}</v-icon>
                      <ul>
                      <draggable v-model="xm2[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                      <li v-for="(xm3, i3) in xm2[10]" :key="'x'+i3"  >
                        <div v-if="xm3[10].length>0" class="g3">
                          3 g - {{i3+1}} >>>>
                          i - {{xm3[0]}} <v-icon>{{ xm3[1] }}</v-icon>
                          <ul>
                          <draggable v-model="xm3[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                          <li v-for="(xm4, i4) in xm3[10]" :key="'x'+i4"  >
                            <div v-if="xm4[10].length>0" class="g4">
                              4 g - {{i4+1}} >>>>>>
                              i - {{xm4[0]}} <v-icon>{{ xm4[1] }}</v-icon>

                              <ul>
                              <draggable v-model="xm4[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                              <li v-for="(xm5, i5) in xm4[10]" :key="'x'+i5"  >
                                <div v-if="xm5[10].length>0" class="g5">
                                  5 g - {{i5+1}} >>>
                                  i - {{xm5[0]}} <v-icon>{{ xm5[1] }}</v-icon>

                                    <ul>
                                    <draggable v-model="xm5[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                                    <li v-for="(xm6, i6) in xm5[10]" :key="'x'+i6"  >
                                      <div v-if="xm6[10].length>0" class="g6">
                                        6 g - {{i6+1}} >>> last
                                        i - {{xm6[0]}} <v-icon>{{ xm6[1] }}</v-icon>

                                      </div>
                                      <div v-else class="i6">
                                        6 i - {{i6+1}}
                                        i - {{xm6[0]}} <v-icon>{{ xm6[1] }}</v-icon>
                                      </div>
                                    </li>
                                    </draggable>
                                    </ul>

                                </div>
                                <div v-else class="i5">
                                  5 i - {{i5+1}}
                                  i - {{xm5[0]}} <v-icon>{{ xm5[1] }}</v-icon>
                                </div>
                              </li>
                              </draggable>
                              </ul>

                            </div>
                            <div v-else class="i4">
                              4 i - {{i4+1}}
                              i - {{xm4[0]}} <v-icon>{{ xm4[1] }}</v-icon>
                            </div>
                          </li>
                          </draggable>
                          </ul>

                        </div>
                        <div v-else class="i3">
                          3 i - {{i3+1}}
                          i - {{xm3[0]}} <v-icon>{{ xm3[1] }}</v-icon>
                        </div>
                      </li>
                      </draggable>
                      </ul>

                    </div>
                    <div v-else class="i2">
                      2 i - {{i2+1}}
                      i - {{xm2[0]}} <v-icon>{{ xm2[1] }}</v-icon>
                    </div>
                  </li>
                  </draggable>
                  </ul>

                  </div>
                  <div v-else class="i1">
                    1 i - {{i1+1}}
                    i - {{xm1[0]}} <v-icon>{{ xm1[1] }}</v-icon>
                  </div>
                </li>
                </draggable>
                </ul>

              </div>
              <div v-else class="i0">
                i - {{i0+1}}
                i - {{xm0[0]}} <v-icon>{{ xm0[1] }}</v-icon>

              </div>
            </li>
            </draggable>
         </ul>



      </v-card>
      <div style="background:white;position: absolute;bottom:1px">
        Zasoba
        <ul>
         <draggable v-model="xMenuEmpty"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
         <li v-for="(xm66, i66) in xMenuEmpty" :key="'x'+i66"  >
           <div v-if="xm66[10].length>0" class="g6">
             g - {{i66+1}} >>> last
             i - {{xm66[0]}} <v-icon>{{ xm66[1] }}</v-icon>
           </div>
           <div v-else class="i6">
             i - {{i66+1}}
             i - {{xm66[0]}} <v-icon>{{ xm66[1] }}</v-icon>
           </div>
         </li>
         </draggable>
        </ul>



      </div>
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
<style>
.g0 {
  background: green;
  padding-left: 0px;
}
.i0 {
  background: #81C784;
  border-right: solid 1px;
  padding-left: 5px;
}
.g1 {
  background: #00838F;
  padding-left: 10px;
}
.i1 {
  background: #80DEEA;
  border-right: solid 1px;
  padding-left: 15px;
}
.g2 {
  background: #827717;
  padding-left: 20px;
}
.i2 {
  background: #D4E157;
  border-right: solid 1px;
  padding-left: 25px;

}
.g3 {
  background: #F57F17;
  padding-left: 30px;
}
.i3 {
  background: #FFEE58;
  border-right: solid 1px;
  padding-left: 35px;
}
.g4 {
  background: #6D4C41;
  padding-left: 40px;
}
.i4 {
  background: #8D6E63;
  border-right: solid 1px;
  padding-left: 45px;

}

.g4 {
  background: #CFD8DC;
  padding-left: 50px;
}
.i4 {
  background: #8D6E63;
  border-right: solid 1px;
  padding-left: 55px;

}

.g5 {
  background: #5E35B1;
  padding-left: 60px;
}
.i5 {
  background: #B39DDB;
  border-right: solid 1px;
  padding-left: 65px;
}

.g6 {
  background: #3949AB;
  padding-left: 60px;
}
.i6 {
  background: #C5CAE9;
  border-right: solid 1px;
  padding-left: 65px;

}

div {
  border-color: white;
  border-radius: 2px;
  margin: 1px
}
li {
  text-align: left;
}


</style>

<script>
// import Api from '@/services/Api'
// {{ xm0[10].length == 0 ? "---G0 - NULL ---" : null }}
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
import vuedraggableresizable from 'vue-draggable-resizable'


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
    'draggable': draggable,
    'vue-draggable-resizable': vuedraggableresizable
  },

  computed: {
    xMenuEmpty2: function(){
      if (this.xMenuEmpty.length==0){
        this.xMenuEmpty.push(this.Add())
      }
    },

    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    xMenuEmptyx: function() {
        this.xMenuEmpty.push(this.Add())

    }
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
      xMenuEmpty:[],
      menu_solo_1: [['Muj přehled', 'trending_up', 'menu_switch', 'set-my-overview', 'true']],
      menu_solo_2: [['Kalkulace', 'iso', 'menu_switch', 'set-calc', 'true']],
      menu_solo_3: [['Zakazky', 'shopping_cart', 'menu_switch', 'set-zakazky', 'true']],

      menu_solo_4: [{
        Nadpis: 'Muj přehled',
        Icona: 'trending_up',
        Akce: 'set-my-overview'
      }],




      menu_set_1: [
        ['Prehledy 1', 'sort', 'menu_switch', 'prehled', 'true','','','','right','Item',[]],
        ['Stara DB', 'accessible', 'menu_switch', 'old-1', 'true', 'window','','','','Item',[]]
        // ['FX', 'accessible', 'menu_switch', 'form-fx', 'true']
      ],
      menu_set_2: [
        ['Barevnost', 'format_color_fill', 'menu_switch', 'set-color', 'true','','','','','Item',[]],
        ['Sirky', 'code', 'menu_switch', 'set-width', 'true','','','','','Item',[]],
        ['Materiály', 'texture', 'menu_switch', 'set-material', 'true','','','','','Item',[]],
        ['Stroje', 'texture', 'menu_switch', 'set-material', 'true','','','','','Item',[]]
      ],
      menu_set_3: [
        ['Uzivatele', 'wc', 'menu_switch', 'set-users', 'true','','','','','Item',[]],
        ['Moduly', 'view_module', 'menu_switch', 'moduly', 'true','','','','','Item',[]],
        ['Neco', 'view_module', 'menu_switch', 'moduly', 'true','','','','','Item',[]],
        ['Neco2', 'view_module', 'menu_switch', 'moduly', 'true','','','','','Item',[]],
        ['Neco3', 'view_module', 'menu_switch', 'moduly', 'true','','','','','Item',[]]
      ],
      menu_empty: [
        ['Popisek', 'ikona', 'menu_switch', 'modul_name', 'true','','','','','Item',[]]
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
    Add: function ()  {
      var aEmpty  = Array(11)
      var aEmpty2  = Array(11)
      aEmpty[0]='Skupina'
      aEmpty[1]='wc'
      aEmpty[2]=''
      aEmpty[8]='left'
      aEmpty[9] = 'Group'
      aEmpty[10] = []
      aEmpty2 = Array(11)
      aEmpty2[0] = 'Aplikace'
      aEmpty2[1] = 'home'
      aEmpty2[3] = 'Spoustec'
      aEmpty2[8]='right'
      aEmpty2[9] = 'Item'
      aEmpty2[10] = []
      aEmpty[10].push(aEmpty2)
      return aEmpty;

    },
    Add2: function()  {
      this.xMenu.push(this.Add())
      this.xMenuEmpty.push(this.Add())
    },


    chooseItem: function (event, bEvent) {
      console.log('Choos item: ', event.draggedRect, 'B', bEvent)
      // alert(Object.keys(bEvent))
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
