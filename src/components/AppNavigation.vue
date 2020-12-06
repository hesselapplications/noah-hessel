<template>
    <v-app-bar flat dark color="primary">
      <v-btn icon @click="$router.go(-1)"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-toolbar-title class="pl-1">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/blog">Blog</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
</template>

<script>

export default {
    props: {
        title: String
    }
};
</script>

