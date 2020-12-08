<template>
  <v-card flat>
    <!-- TOOLBAR -->
    <v-toolbar dark flat height="35" color="secondary">
      <!-- TITLE -->
      <v-toolbar-title class="caption font-weight-bold text-uppercase">
        {{ filename || language }}
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- COPY -->
      <v-btn
        id="clipboard"
        text
        small
        data-clipboard-target="#code"
      >
        <v-icon small left>{{ copyIcon }}</v-icon>
        Copy
      </v-btn>
    </v-toolbar>

    <!-- CODE -->
    <pre
      id="code"
      class="my-0 px-3 inline-color match-braces"
    ><code :class="`language-${language}`">{{ code }}</code></pre>
  </v-card>
</template>

<script>
import Clipboard from "clipboard";
import Prism from "prismjs";

export default {
  props: {
    code: String,
    language: String,
    filename: String,
  },
  data() {
    return {
      copyIcon: "mdi-content-copy"
    };
  },
  mounted() {
    Prism.highlightAll();
    const clipboard = new Clipboard("#clipboard");
    clipboard.on("success", (event) => {
      event.clearSelection();

      this.copyIcon = "mdi-check";
      setTimeout(() => {
        this.copyIcon = "mdi-content-copy";
      }, 3000);
    });
  },
};
</script>
<style>
#code {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.inline-color-wrapper {
  margin-right: 6px !important;
}
</style>