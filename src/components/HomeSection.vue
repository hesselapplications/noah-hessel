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
        <v-col cols="12" sm="10" class="slide-y pt-4 pb-8">
          <slot></slot>
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
};
</script>


