<template>
  <v-container grid-list-lg>
    <v-layout justify-center>
      <v-flex xs12 sm10>
        <div class="display-1 text-uppercase font-weight-medium white--text">{{label}}</div>
      </v-flex>
    </v-layout>
    <v-layout
      align-center
      justify-center
      v-resize="() => minHeight = this.getMinHeight()"
      :style="{'min-height': minHeight + 'px'}"
    >
      <v-flex xs12 sm10 class="slide-y">
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    label: String
  },
  computed: {
    style() {
      return {
        "min-height": window.innerHeight / 2 + "px"
      };
    }
  },
  data() {
    return {
      minHeight: this.getMinHeight()
    };
  },
  methods: {
    getMinHeight() {
      return window.innerHeight / 2;
    }
  }
};
</script>


