<template>
  <div class="white elevation-2" >
    <v-toolbar flat dense class="silver" color="silver"  extensionHeight="24px">
      <v-toolbar-title>{{title}}<slot name="title1"></slot></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <slot name="action" />
    </v-toolbar>

    <div class="pl-0 pr-4 pt-2 pb-2" >
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
</style>
