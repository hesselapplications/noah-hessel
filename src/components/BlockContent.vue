<template>
  <block-content :blocks="blocks" :serializers="serializers"></block-content>
</template>

<script>
import BlockContent from 'sanity-blocks-vue-component'
import Code from '@/components/Code'


export default {
  components: {
    BlockContent
  },
  props: {
    blocks: Array
  },
  data() {
    return {
      serializers: {
        types: {
          code: Code
        }
      }
    }
  }
};
</script>