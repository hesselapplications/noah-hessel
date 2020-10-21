<template>
  <v-flex xs6>
    <v-layout align-center>
      <v-icon :color="model.color" class="pa-3">{{model.icon}}</v-icon>
      <span class="subheading font-weight-medium white--text">{{model.label}}</span>
    </v-layout>
    <v-progress-linear :value="model.level" :color="model.color" height="8"></v-progress-linear>
  </v-flex>
</template>

<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>

