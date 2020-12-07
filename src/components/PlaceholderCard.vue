<template>
    <v-card
      style="border: dashed 2px white !important"
      v-bind="$attrs"
      v-on="$listeners"
      hover
      outlined
      height="100%"
      color="transparent"
      dark
    >
      <v-row class="fill-height text-center" no-gutters align="center" justify="center">
        <v-col cols="auto">
          <v-icon large>{{ icon }}</v-icon>
          <div class="text-subtitle-2 pt-2">{{ label }}</div>
        </v-col>
      </v-row>
    </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    label: String
  }
};
</script>