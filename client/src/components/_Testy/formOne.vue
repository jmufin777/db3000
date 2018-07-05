<template>
  <v-container fluid grid-list-md >
    <input type='text' placeholder="form_1" required />
     <v-flex xs12 sm6 md3>
          <v-text-field
            label="Jmeno"
            placeholder="aaaa"
            autofocus
            v-model="blog.jmeno1"
            box
          ></v-text-field>
          <v-text-field
            label="jemno 2"
            placeholder="aaaa"
            solo
            v-model="blog.jmeno2"
            outline
          ></v-text-field>
        </v-flex>
      <v-layout row wrap>
      <v-flex xs6>
       <v-textarea name="input-7-1"
          label="TextArea test"
          value="Text prvni"
          hint="Hint text"
          solo
          dark
        >aaaa</v-textarea>
      </v-flex>

      </v-layout>

        <div v-for="(a, index) in blog.kat" :key="index">
          {{ a }}
       </div>
    <v-layout wrap>
      <v-flex xs12>
        <v-checkbox
          append-icon="close"
          prepend-icon="phone"
          v-model="blog.kat"
          value="a"
          xs1
        >
          Default Slot
        </v-checkbox>
        <v-checkbox
          append-icon="close"
          prepend-icon="all_out"
          v-model="blog.kat"
          value="b"
          xs1
        >
          Default Slot
        </v-checkbox>
    <v-date-picker
      v-model="blog.jmeno1"
      width="190"
      class="mt-3"
      locale="cs-cz"
      header-color="pink"
    ></v-date-picker>


      </v-flex>
       <v-flex xs12 sm6 d-flex>
        <v-combobox
          v-model="sel"
          :items="items"
          label="Standard"
        ></v-combobox>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
export default {
  data () {

    return {
      sel: "ahoj",
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      picker: null,
      landscape: false,
      reactive: false,
      blog: {
        kat: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        jmeno1: '',
        jmeno2: ''
      }
    }
  }
}
</script>
<style scoped>
</style>
