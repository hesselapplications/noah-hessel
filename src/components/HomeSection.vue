<template>
  <v-sheet :color="color">
    <v-container grid-list-lg>
      <v-row justify="center">
        <v-col cols="12" sm="10">
          <v-row align="center" no-gutters>
            <v-col
              cols="auto"
              class="text-h5 text-uppercase font-weight-medium white--text mr-2"
              >{{ label }}</v-col
            >
            <v-col cols="auto" v-if="to">
              <v-btn small icon dark :to="to">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
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
    color: String
  },
};
</script>


