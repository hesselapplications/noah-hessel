<template>
  <pre>
    <code :class="`language-${language}`">{{ code }}</code>
  </pre>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";

export default {
  props: {
    code: String,
    language: String,
  },
  mounted() {
    Prism.highlightAll();
  },
};
</script>