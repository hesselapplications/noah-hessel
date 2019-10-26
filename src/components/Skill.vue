<template>
  <v-flex xs6>
    <v-layout align-center>
      <v-icon :color="model.color" class="pl-3 pr-2">{{model.icon}}</v-icon>
      <span class="subheading font-weight-medium white--text">{{model.label}}</span>
    </v-layout>
    <v-progress-linear :value="model.level" :color="model.color"></v-progress-linear>
  </v-flex>
</template>

<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>

