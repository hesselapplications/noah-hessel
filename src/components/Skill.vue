<template>
  <div>
    <div class="d-flex align-center">
      <v-icon :color="color" class="pa-2">{{ icon }}</v-icon>
      <span class="text-body-2 white--text">{{ label }}</span>
    </div>
    <v-progress-linear
      rounded
      :value="animatedLevel"
      :color="color"
      height="8"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    icon: String,
    label: String,
    level: Number,
  },
  data() {
    return {
      animatedLevel: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.animatedLevel = this.level;
    }, 500)
  },
};
</script>
<style>
.v-progress-linear {
  transition-duration: 1s;
}
</style>

