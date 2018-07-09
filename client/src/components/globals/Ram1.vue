<template>
<v-flex lg text-lg-right class="white elevation-20 " style="position:absolute;top:-60px;left:1px" >
      <slot>
        No slot content defined.
      </slot>
 </v-flex>
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
