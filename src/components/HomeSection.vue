<template>
  <v-sheet :color="color">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          class="text-h5 text-uppercase font-weight-medium white--text"
        >
          {{ label }}
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12" sm="10" class=" pt-4 pb-8">
          <v-expand-transition>
            <slot v-if="show"></slot>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    label: String,
    to: String,
    color: String,
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500)
  }
};
</script>
<style scoped>
.expand-transition-enter-active, .expand-transition-leave-active {
  transition-duration: 1s !important
}
</style>