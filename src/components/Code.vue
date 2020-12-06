<template>
  <v-card flat>
    <!-- TOOLBAR -->
    <v-toolbar flat height="40" color="grey lighten-3">
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
        @click="snackbar = true"
      >
        <v-icon small left>mdi-content-copy</v-icon>
        Copy
      </v-btn>
    </v-toolbar>

    <v-divider></v-divider>

    <!-- CODE -->
    <pre
      id="code"
      class="my-0 px-3"
    ><code :class="`language-${language}`">{{ code }}</code></pre>

    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" timeout="1000">
      Copied!
      <template v-slot:action="{ attrs }">
        <v-btn color="grey" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import Clipboard from "clipboard";
import Prism from "prismjs";

export default {
  props: {
    code: String,
    language: String,
    filename: String
  },
  data() {
    return {
      snackbar: false,
    };
  },
  mounted() {
    Prism.highlightAll();
    const clipboard = new Clipboard("#clipboard");
    clipboard.on("success", (event) => {
      event.clearSelection();
    });
  },
};
</script>
<style>
#code {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>