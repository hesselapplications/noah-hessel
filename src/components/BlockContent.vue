<template>
  <block-content :blocks="blocks" :serializers="serializers"></block-content>
</template>

<script>
import BlockContent from "sanity-blocks-vue-component";
import Code from "@/components/Code";
import ImageSerializer from "@/components/ImageSerializer";

export default {
  components: {
    BlockContent,
  },
  props: {
    blocks: Array,
  },
  data() {
    return {
      serializers: {
        types: {
          code: Code,
          img: ImageSerializer,
        },
      },
    };
  },
};
</script>
<style>
h1 {
  padding-top: 1ch;
  padding-bottom: 1ch;
}

p {
  padding: 1ch 0ch;
}
</style>