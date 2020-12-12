<template>
  <div>
    <v-icon small left color="grey lighten-1">mdi-tag</v-icon>
    <v-chip
      v-for="tag in tags"
      :key="tag"
      class="mr-2"
      small
      label
      outlined
      disabled
    >
      {{ tag }}
    </v-chip>
  </div>
</template>

<script>

export default {
  props: {
    tags: Array
  }
};
</script>

