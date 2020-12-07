<template>
  <div>
    <div class="d-flex align-center">
      <v-icon :color="model.color" class="pa-3">{{model.icon}}</v-icon>
      <span class="text-body-2 white--text">{{model.label}}</span>
    </div>
    <v-progress-linear :value="model.level" :color="model.color" height="8"></v-progress-linear>
  </div>
</template>

<script>
import vmodel from "@/mixins/vmodel.js";

export default {
  mixins: [vmodel]
};
</script>

