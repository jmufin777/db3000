<template>
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
   <v-list-tile @click="component='testy'">
     <v-list-tile-action>
       <v-icon>wb_sunny</v-icon>
     </v-list-tile-action>
     <v-list-tile-content>
       <v-list-tile-title>Testy</v-list-tile-title>
     </v-list-tile-content>
   </v-list-tile>
</v-list>
</template>

<script>
export default({
  props: [
    'title'
  ]
})
</script>
