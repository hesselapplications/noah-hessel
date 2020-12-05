<template>
  <block-content :blocks="blocks"></block-content>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'

export default {
  components: {
    BlockContent
  },
  props: {
    blocks: Array
  }
};
</script>