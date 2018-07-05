<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <v-btn @click="component = 'form-one'">Show form one</v-btn>
    <v-btn @click="component = 'form-two'">Show form two</v-btn>
    <v-btn @click="component = 'form-three'">Show form two</v-btn>

  </div>
</template>

<script>
// import Api from '@/services/Api'
import formOne from './formOne.vue'
import formTwo from './formTwo.vue'
import formThree from './formThree.vue'
// import {mapState} from 'vuex'

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo,
    'form-three': formThree
  },
  data () {
    return {
      component: 'form-two'
    }
  },
  methods: {
    handleSubmit () {
      alert('aaa')
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
