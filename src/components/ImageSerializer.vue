<template>
  <image-viewer :src="[imageUrl]" />
</template>

<script>
import api from "@/api.js"
import ImageViewer from '@/components/ImageViewer'

export default {
  components: {
    ImageViewer
  },
  props: {
    _sanityProps: Object
  },
  computed: {
    imageUrl() {
      return api.getImage(this._sanityProps.node).url();
    }
  }
};
</script>