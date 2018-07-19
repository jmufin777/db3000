<template >




  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      clipped
      light
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

    <draggable v-model="menu_set_3"  :options="{group:{ name:'people',  pull:'clone', put:false }}"  @start="drag=true" @end="drag=false" :move="chooseItem" >
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

<!-- :sticks="['tm','bm','ml','mr']
:isActive="true"
:isDraggable="false"
:isResizable="false"
:parentLimitation="true"
:aspectRatio="false" - skusit, proporce
:minw
:minh

@activated
@deactivated
@resizing

 @resizestop
 @dragging
 @dragstop -->
<vue-draggable-resizable :z="1" :x="800" :y="0" :h="500" :w="500" :isActive="false" :isResizable="false" :parent="false" @dragging="" style="border: 1px solid black" :drag-handle="'.drag'">

  <div class="drag elevation-20" style="padding: 0px; margin: 0px;  border: 1px solid; "    @click="true">Menu nahled
    <v-icon>add</v-icon>
  </div>

      <div class="elevation-20 g0" style="height:90%;overflow-y:scroll" >
     <div class="drag" style="position:absolute;padding: 0px; margin: 0px;bottom:0px;  border: 1px solid"><v-icon>add</v-icon></div>

    <v-list  dense class="pa-8 ma-8">

      <draggable v-for="(xm0, j ) in xMenu" :key="j" v-model="xMenu"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

      <v-list-group   v-if="xm0[9]=='Group'"  value="1"    :prepend-icon="xm0[1]" class="">
      <v-list-tile slot="activator">
      <v-list-tile-title class="font-weight-black">
        G {{ xm0[0] }}
        </v-list-tile-title>
      </v-list-tile><!-- Sem dalsi //-->

        <draggable v-for="(xm1, j1 ) in xm0[10]" :key="j1"  v-model="xm0[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

        <v-list-group v-if="xm1[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm1[1]" class="">
        <v-list-tile slot="activator">
        <v-list-tile-title class="font-weight-black">G {{ xm1[0] }}</v-list-tile-title>
        </v-list-tile><!-- Sem dalsi //-->
            <draggable v-for="(xm2, j2 ) in xm1[10]" :key="j2"  v-model="xm1[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

            <v-list-group v-if="xm2[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm2[1]" class="">
            <v-list-tile slot="activator">
            <v-list-tile-title class="font-weight-black">G {{ xm2[0] }}</v-list-tile-title>
            </v-list-tile><!-- Sem dalsi //-->

              <draggable v-for="(xm3, j3 ) in xm2[10]" :key="j3"  v-model="xm2[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

              <v-list-group v-if="xm3[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm3[1]" class="">
              <v-list-tile slot="activator">
              <v-list-tile-title class="font-weight-black">G {{ xm3[0] }}</v-list-tile-title>
              </v-list-tile><!-- Sem dalsi //-->

                    <draggable v-for="(xm4, j4 ) in xm3[10]" :key="j4"  v-model="xm3[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

                    <v-list-group v-if="xm4[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm4[1]" class="">
                    <v-list-tile slot="activator">
                    <v-list-tile-title class="font-weight-black">G {{ xm4[0] }}</v-list-tile-title>
                    </v-list-tile><!-- Sem dalsi //-->

                          <draggable v-for="(xm5, j5 ) in xm4[10]" :key="j5"  v-model="xm4[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

                          <v-list-group v-if="xm5[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm5[1]" class="">
                          <v-list-tile slot="activator">
                          <v-list-tile-title class="font-weight-black">G {{ xm5[0] }}</v-list-tile-title>
                          </v-list-tile><!-- Sem dalsi //-->

                            <draggable v-for="(xm6, j6 ) in xm5[10]" :key="j6"   v-model="xm5[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

                            <v-list-group v-if="xm6[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm6[1]" class="">
                            <v-list-tile slot="activator">
                            <v-list-tile-title class="font-weight-black">G {{ xm6[0] }}</v-list-tile-title>
                            </v-list-tile><!-- Sem dalsi //-->
                              <draggable  v-for="(xm7, j7 ) in xm6[10]" :key="j7"  v-model="xm6[10]"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >
                              <v-list-group v-if="xm7[9]=='Group'"  value="true"  sub-group   :prepend-icon="xm7[1]" class="">
                              <v-list-tile slot="activator">
                              <v-list-tile-title class="font-weight-black">G {{ xm7[0] }}</v-list-tile-title>
                              </v-list-tile><!-- Sem dalsi //-->
                              </v-list-group>
                              <v-list-tile v-if="xm7[9]=='Item'" @click="menu_switch(xm7)" class="">
                              <v-list-tile-action v-if="xm7[8]=='left'"><v-icon style="height:105px">{{xm6[1]}}</v-icon></v-list-tile-action>
                              <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 70" :key="x">&nbsp;</span>{{ xm7[0] }} : {{ j7 }}</v-list-tile-title></v-list-tile-content>
                              <v-list-tile-action v-if="xm7[8]=='right' ||  xm7[8]== ''"><v-icon style="height:105px">{{xm7[1]}}</v-icon></v-list-tile-action>
                              </v-list-tile>
                              </draggable>

                            </v-list-group>
                            <v-list-tile v-if="xm6[9]=='Item'" @click="menu_switch(xm6)" class="">
                            <v-list-tile-action v-if="xm6[8]=='left'"><v-icon style="height:105px">{{xm6[1]}}</v-icon></v-list-tile-action>
                            <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 60" :key="x">&nbsp;</span>{{ xm6[0] }} : {{ j6 }}</v-list-tile-title></v-list-tile-content>
                            <v-list-tile-action v-if="xm6[8]=='right' ||  xm6[8]== ''"><v-icon style="height:105px">{{xm6[1]}}</v-icon></v-list-tile-action>
                            </v-list-tile>
                            </draggable>

                          </v-list-group>
                          <v-list-tile v-if="xm5[9]=='Item'" @click="menu_switch(xm5)" class="">
                          <v-list-tile-action v-if="xm5[8]=='left'"><v-icon style="height:105px">{{xm5[1]}}</v-icon></v-list-tile-action>
                          <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 50" :key="x">&nbsp;</span>{{ xm5[0] }} : {{ j5 }}</v-list-tile-title></v-list-tile-content>
                          <v-list-tile-action v-if="xm5[8]=='right' ||  xm5[8]== ''"><v-icon style="height:105px">{{xm5[1]}}</v-icon></v-list-tile-action>
                          </v-list-tile>
                          </draggable>

                    </v-list-group>
                    <v-list-tile v-if="xm4[9]=='Item'" @click="menu_switch(xm4)" class="">
                    <v-list-tile-action v-if="xm4[8]=='left'"><v-icon style="height:105px">{{xm4[1]}}</v-icon></v-list-tile-action>
                    <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 40" :key="x">&nbsp;</span>{{ xm4[0] }} : {{ j4 }}</v-list-tile-title></v-list-tile-content>
                    <v-list-tile-action v-if="xm4[8]=='right' ||  xm4[8]== ''"><v-icon style="height:105px">{{xm4[1]}}</v-icon></v-list-tile-action>
                    </v-list-tile>
                    </draggable>

              </v-list-group>
              <v-list-tile v-if="xm3[9]=='Item'" @click="menu_switch(xm2)" class="">
              <v-list-tile-action v-if="xm3[8]=='left'"><v-icon style="height:105px">{{xm3[1]}}</v-icon></v-list-tile-action>
              <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 30" :key="x">&nbsp;</span>{{ xm3[0] }} : {{ j3 }}</v-list-tile-title></v-list-tile-content>
              <v-list-tile-action v-if="xm3[8]=='right' ||  xm3[8]== ''"><v-icon style="height:105px">{{xm3[1]}}</v-icon></v-list-tile-action>
              </v-list-tile>
              </draggable>

            </v-list-group>
            <v-list-tile v-if="xm2[9]=='Item'" @click="menu_switch(xm2)" class="">
            <v-list-tile-action v-if="xm2[8]=='left'"><v-icon style="height:105px">{{xm2[1]}}</v-icon></v-list-tile-action>
            <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 20" :key="x">&nbsp;</span>{{ xm2[0] }} : {{ j2 }}</v-list-tile-title></v-list-tile-content>
            <v-list-tile-action v-if="xm2[8]=='right' ||  xm2[8]== ''"><v-icon style="height:105px">{{xm2[1]}}</v-icon></v-list-tile-action>
            </v-list-tile>
            </draggable>
        </v-list-group>
        <v-list-tile v-if="xm1[9]=='Item'" @click="menu_switch(xm1)" class="">
        <v-list-tile-action v-if="xm1[8]=='left'"><v-icon style="height:105px">{{xm1[1]}}</v-icon></v-list-tile-action>
        <v-list-tile-content ><v-list-tile-title   ><span v-for="x in 10" :key="x">&nbsp;</span>{{ xm1[0] }} : {{ j1 }}</v-list-tile-title></v-list-tile-content>
        <v-list-tile-action v-if="xm1[8]=='right' ||  xm1[8]== ''"><v-icon style="height:105px">{{xm1[1]}}</v-icon></v-list-tile-action>
        </v-list-tile>
        </draggable>

      </v-list-group>
      <v-list-tile  v-if="xm0[9]=='Item'" @click="menu_switch(xm0)" class="">
      <v-list-tile-action v-if="xm0[8]=='left'"><v-icon style="height:105px">{{xm0[1]}}</v-icon></v-list-tile-action>
      <v-list-tile-content ><v-list-tile-title   ><span v-for="x0 in 0" :key="x0">&nbsp;</span>{{ xm0[0] }} : {{ j }}</v-list-tile-title></v-list-tile-content>
      <v-list-tile-action v-if="xm0[8]=='right' || xm0[8]=='' "><v-icon style="height:105px">{{xm0[1]}}</v-icon></v-list-tile-action>
      </v-list-tile>

      </draggable>

    </v-list>


     </div>
    </vue-draggable-resizable>
    </v-flex>




    <v-flex md6 >
     <vue-draggable-resizable :parent="false" :z="0" :x="100" :y="0" :h="500" :w="500" :isActive="false" :isResizable="false" style="border: 1px solid black" :drag-handle="'.drag'">
       <div class="drag" style="padding: 0px; margin: 0px; background-color: silver; border: 1px solid">Menu Schema</div>

      <div class="blue" style="height:80%;overflow-y:scroll;" >
         <ul>

            <draggable v-model="xMenu"  :options="{group: 'people' }" @start="drag=true" @end="drag=false" :move="chooseItem" >

            <li v-for="(xm0, i0) in xMenu" :key="'x'+i0"  >
                <span v-if="xm0[10].length == 0 &&  xm0[9]=='Group' " style='display:none'>  {{ xm0[10] = [] }}{{ xm0[10]=[AddEmptyItem()]}}</span>

              <div v-if="xm0[10].length>0 || xm0[9]=='Group'" class="g0">

                <v-icon>{{ xm0[1] }}</v-icon>
                <v-btn v-if="xm0[10].length == 0"
                class="orange accent-12 elevation-10"
                light
                small
                absolute
                middle
                fab
                ripple
                @click="xm0[10]=[AddEmptyItem()]"
                 ><v-icon>add</v-icon></v-btn>

                <ul class="elevation-18">
                <draggable v-model="xm0[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >

                <li v-for="(xm1, i1) in xm0[10]" :key="'x'+i1"  >
                  <span v-if="xm1[10].length == 0 &&  xm1[9]=='Group' " style='display:none'>  {{ xm1[10] = [] }}{{ xm1[10]=[AddEmptyItem()]}}</span>
                  <div v-if="xm1[10].length>0" class="g1 elevation-18">
                    1 g - {{i1+1}} AAAAA>> {{ xm1[10].length==0 }}
                    i - {{xm1[0]}} <v-icon>{{ xm1[1] }}</v-icon>
                  <ul class="elevation-15">
                  <draggable v-model="xm1[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                  <li v-for="(xm2, i2) in xm1[10]" :key="'x'+i2"  >
                    <span v-if="xm2[10].length == 0 &&  xm2[9]=='Group' " style='display:none'>  {{ xm2[10] = [] }}{{ xm2[10]=[AddEmptyItem()]}}</span>
                    <div v-if="xm2[10].length>0" class="g2 elevation-15">
                      2 g - {{i2+1}} >>>
                      i - {{xm2[0]}} <v-icon>{{ xm2[1] }}</v-icon>
                      <ul class="elevation-12">
                      <draggable v-model="xm2[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                      <li v-for="(xm3, i3) in xm2[10]" :key="'x'+i3"  >
                        <span v-if="xm3[10].length == 0 &&  xm3[9]=='Group' " style='display:none'>  {{ xm3[10] = [] }}{{ xm3[10]=[AddEmptyItem()]}}</span>
                        <div v-if="xm3[10].length>0" class="g3 elevation-12">
                          3 g - {{i3+1}} >>>>
                          i - {{xm3[0]}} <v-icon>{{ xm3[1] }}</v-icon>
                          <ul class="elevation-9">
                          <draggable v-model="xm3[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                          <li v-for="(xm4, i4) in xm3[10]" :key="'x'+i4"  >
                            <span v-if="xm4[10].length == 0 &&  xm4[9]=='Group' " style='display:none'>  {{ xm4[10] = [] }}{{ xm4[10]=[AddEmptyItem()]}}</span>
                            <div v-if="xm4[10].length>0" class="g4 elevation-9">
                              4 g - {{i4+1}} >>>>>>
                              i - {{xm4[0]}} <v-icon>{{ xm4[1] }}</v-icon>

                              <ul class="elevation-6">
                              <draggable v-model="xm4[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                              <li v-for="(xm5, i5) in xm4[10]" :key="'x'+i5"  >
                                <span v-if="xm5[10].length == 0 &&  xm5[9]=='Group' " style='display:none'>  {{ xm5[10] = [] }}{{ xm5[10]=[AddEmptyItem()]}}</span>
                                <div v-if="xm5[10].length>0" class="g5 elevation-6">
                                  5 g - {{i5+1}} >>>
                                  i - {{xm5[0]}} <v-icon>{{ xm5[1] }}</v-icon>
                                    <ul class="elevation-3">
                                    <draggable v-model="xm5[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                                    <li v-for="(xm6, i6) in xm5[10]" :key="'x'+i6"  >
                                      <span v-if="xm6[10].length == 0 &&  xm6[9]=='Group' " style='display:none'>  {{ xm6[10] = [] }}{{ xm6[10]=[AddEmptyItem()]}}</span>
                                      <div v-if="xm6[10].length>0" class="g6 elevation-3">
                                        6 g - {{i6+1}} >>> last
                                        i - {{xm6[0]}} <v-icon>{{ xm6[1] }}</v-icon>
                                          <ul class="elevation-0">
                                          <draggable v-model="xm6[10]"  :options="{group: 'people'}" @start="drag=true" @end="drag=false" :move="chooseItem" >
                                          <li v-for="(xm7, i7) in xm6[10]" :key="'x'+i7"  >
                                            <span v-if="xm7[10].length == 0 &&  xm7[9]=='Group' " style='display:none'>  {{ xm7[10] = [] }}{{ xm7[10]=[AddEmptyItem()]}}</span>
                                            <div v-if="xm7[10].length>0" class="g7 elevation-0" >
                                              7 g - {{i7+1}} >>> last
                                              i - {{xm7[0]}} <v-icon>{{ xm7[1] }}</v-icon>
                                            </div>
                                            <div v-else class="i7 elevation-0">
                                              7 i - {{i7+1}}
                                              i - {{xm7[0]}} <v-icon>{{ xm7[1] }}</v-icon>
                                            </div>
                                          </li>
                                          </draggable>
                                          </ul>
                                      </div>
                                      <div v-else class="i6 elevation-3">
                                        6 i - {{i6+1}}
                                        i - {{xm6[0]}} <v-icon>{{ xm6[1] }}</v-icon>
                                      </div>
                                    </li>
                                    </draggable>
                                    </ul>
                                </div>
                                <div v-else class="i5 elevation-5">
                                  5 i - {{i5+1}}
                                  i - {{xm5[0]}} <v-icon>{{ xm5[1] }}</v-icon>
                                </div>
                              </li>
                              </draggable>
                              </ul>
                            </div>
                            <div v-else class="i4 elevation-8">
                              4 i - {{i4+1}}
                              i - {{xm4[0]}} <v-icon>{{ xm4[1] }}</v-icon>
                            </div>
                          </li>
                          </draggable>
                          </ul>
                        </div>
                        <div v-else class="i3 elevation-11">
                          3 i - {{i3+1}}
                          i - {{xm3[0]}} <v-icon>{{ xm3[1] }}</v-icon>
                        </div>
                      </li>
                      </draggable>
                      </ul>

                    </div>
                    <div v-else class="i2 elevation-14">
                      2 i - {{i2+1}}
                      i - {{xm2[0]}} <v-icon>{{ xm2[1] }}</v-icon>
                    </div>
                  </li>
                  </draggable>
                  </ul>

                  </div>
                  <div v-else class="i1 elevation-17">
                    1 i - {{i1+1}}
                    i - {{xm1[0]}} <v-icon>{{ xm1[1] }}</v-icon>
                  </div>
                </li>
                </draggable>
                </ul>

              </div>
              <div v-else class="i0 elevation-20">
                i - {{i0+1}}
                i - {{xm0[0]}} <v-icon>{{ xm0[1] }}</v-icon>

              </div>
            </li>
            </draggable>
         </ul>

    </div>
    </vue-draggable-resizable>
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
  margin: 2px;
}
.i0 {
  background: #81C784;
  border-right: solid 1px;
  padding-left: 5px;
}
.g1 {
  background: #00838F;
  padding-left: 10px;
  margin: 2px;
}
.i1 {
  background: #80DEEA;
  border-right: solid 1px;
  padding-left: 15px;
}
.g2 {
  background: #827717;
  padding-left: 20px;
  margin: 2px;
}
.i2 {
  background: #D4E157;
  border-right: solid 1px;
  padding-left: 25px;

}
.g3 {
  background: #F57F17;
  padding-left: 30px;
  margin: 2px;
}
.i3 {
  background: #FFEE58;
  border-right: solid 1px;
  padding-left: 35px;
}
.g4 {
  background: #6D4C41;
  padding-left: 40px;
  margin: 2px;
}
.i4 {
  background: #8D6E63;
  border-right: solid 1px;
  padding-left: 45px;

}
.g4 {
  background: #CFD8DC;
  padding-left: 50px;
  margin: 2px;
}
.i4 {
  background: #8D6E63;
  border-right: solid 1px;
  padding-left: 55px;

}

.g5 {
  background: #5E35B1;
  padding-left: 60px;
  margin: 2px;
}
.i5 {
  background: #B39DDB;
  border-right: solid 1px;
  padding-left: 65px;
}

.g6 {
  background: #3949AB;
  padding-left: 60px;
  margin: 2px;
}
.i6 {
  background: #C5CAE9;
  border-right: solid 1px;
  padding-left: 65px;

}
.g7 {
  background: #4FC3F7;
  padding-left: 60px;
  margin: 2px;
}
.i7 {
  background: #80D8FF;
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

    },
    xMenu: function() {
      var lCountGroups = false
      if (this.xMenu.length == 0){
       this.AddDefault()
      } else {
          lCountGroups = this.xMenu.some(function (aItem) {
            return aItem[9]=='Group'
          })
       if (lCountGroups === false) {
         this.xMenu.push(this.AddEmptyGroup())

       }

      }

    }

  },

  data: () => {
    return {
      drawer: true,
      props: {
        source: String
      },

      n: 21,
      width: 200,
      height: 100,
      left: 100,
      top: 100,
      isOpen: true,

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
      menu_solo_1: [['Muj přehled', 'trending_up', 'menu_switch', 'set-my-overview', 'true','','','','right','Item',[] ]],
      menu_solo_2: [['Kalkulace', 'iso', 'menu_switch', 'set-calc', 'true','','','','right','Item',[]] ],
      menu_solo_3: [['Zakazky', 'shopping_cart', 'menu_switch', 'set-zakazky', 'true','','','','right','Item',[]] ],

      menu_solo_4: [{
        Nadpis: 'Muj přehled',
        Icona: 'trending_up',
        Akce: 'set-my-overview'
      }],




      menu_set_1: [
        ['Prehledy', 'sort', 'menu_switch', 'prehled', 'true','','','','right','Item',[]],
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

      ]
    }
  },

  methods: {
    range: _.range,

    Status: function () {
      alert('status')
    },
    onDragAll: function (newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
      alert(newRect)

    },
    AddDefault: function () {
      var aEmpty = Array(11)

      this.xMenu.push( this.menu_solo_1[0])
      this.xMenu.push( this.menu_solo_2[0])
      this.xMenu.push( this.menu_solo_3[0])

      aEmpty[0] = 'Přehledy'
      aEmpty[1] = 'pie_chart'
      aEmpty[2] = ''
      aEmpty[8] = 'left'
      aEmpty[9] = 'Group'
      aEmpty[10]=[]
      aEmpty[10].push(['Muj přehled', 'trending_up', 'menu_switch', 'set-my-overview', 'true', '', '', '', 'right', 'Item', []])
      aEmpty[10].push(['Stara DB', 'accessible', 'menu_switch', 'old-1', 'true', 'window','','','','Item',[]])
      this.xMenu.push( aEmpty)
      var aEmpty  = Array(11)
      var aEmpty2 = Array(11)
      var aEmpty3 = Array(11)

      aEmpty[0] = 'Administrace'
      aEmpty[1] = 'people_outline'
      aEmpty[2] = ''
      aEmpty[8] = 'left'
      aEmpty[9] = 'Group'
      aEmpty[10]=[]
      aEmpty2=['Materiály', 'texture', '', '', 'true','','','','','Group',[]]
      aEmpty2[10].push(['Potisknutelnost', 'texture', 'menu_switch', 'material-potisknutelnost', 'true','','','','','Item',[]])
      aEmpty2[10].push(['Rozmery', 'texture', 'menu_switch', 'material-rozmery', 'true','','','','','Item',[]])
      aEmpty2[10].push(['Typ', 'texture', 'menu_switch', 'material-typ', 'true','','','','','Item',[]])
      aEmpty3 = ['Barevnosti', 'texture', 'menu_switch', 'stroje-barevnost', 'true','','','','','Item',[]]
      aEmpty2[10].push(['Stroje', 'texture', '', '', 'true','','','','','Group',[]])

      aEmpty[10].push(aEmpty2)
      this.xMenu.push( aEmpty)


      // this.xMenu.push(this.Add(this.menu_solo_2[0]))
      // this.xMenu.push(this.Add(this.menu_solo_3[0]))
    },

    Add: function () {
      var aEmpty = Array(11)
      var aEmpty2 = Array(11)
      aEmpty[0] = 'Skupina'
      aEmpty[1] = 'wc'
      aEmpty[2] = ''
      aEmpty[8] = 'left'
      aEmpty[9] = 'Group'
      aEmpty[10] = []
      aEmpty2 = Array(11)
      aEmpty2[0] = 'Aplikace'
      aEmpty2[1] = 'home'
      aEmpty2[3] = 'Spoustec'
      aEmpty2[8] = 'right'
      aEmpty2[9] = 'Item'
      aEmpty2[10] = []
      aEmpty[10].push(aEmpty2)
      return aEmpty
    },

    Add2: function () {
      this.xMenu.push(this.Add())
      this.xMenuEmpty.push(this.Add())
    },
    AddEmptyItem: function () {
      var aEmpty2 = Array(11)
      aEmpty2[0] = 'Aplikace'
      aEmpty2[1] = 'home'
      aEmpty2[3] = 'Spoustec'
      aEmpty2[8] = 'right'
      aEmpty2[9] = 'Item'
      aEmpty2[10] = []
      return aEmpty2;
    },
    AddEmptyGroup: function () {
      var aEmpty2 = Array(11)
      aEmpty2[0] = 'Skupina'
      aEmpty2[1] = 'home'
      aEmpty2[3] = 'Spoustec'
      aEmpty2[8] = 'right'
      aEmpty2[9] = 'Group'
      aEmpty2[10] = []
      return aEmpty2;
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
    this.AddDefault()
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
