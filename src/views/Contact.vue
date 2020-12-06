<template>
  <div>
    <app-navigation title="Contact"></app-navigation>

    <v-container>
      <v-row justify="center">
        <v-col xl="6" lg="8" md="10" cols="12">
          <!-- FORM -->
          <v-form ref="form" name="contact" @submit="submit">
            <v-card>
              <v-card-title> Contact Me </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-row dense>
                  <!-- NAME -->
                  <v-col cols="6">
                    <v-text-field
                      v-model="form.name"
                      label="Name"
                      name="name"
                      hide-details
                      :rules="[(v) => !!v || 'Name is required']"
                      class="required"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <!-- EMAIL -->
                  <v-col cols="6">
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      name="email"
                      type="email"
                      hide-details
                      :rules="[(v) => !!v || 'Name is required']"
                      class="required"
                      required
                      outlined
                    ></v-text-field>
                  </v-col>

                  <!-- MESSAGE -->
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      name="message"
                      label="Message"
                      hide-details
                      :rules="[(v) => !!v || 'Message is required']"
                      class="required"
                      required
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed color="primary" type="submit">
                  <v-icon left small>mdi-send</v-icon>
                  Submit
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>

    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" timeout="3000">
      {{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="grey" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import qs from "qs";
import axios from "axios";
import AppNavigation from "@/components/AppNavigation";

export default {
  components: {
    AppNavigation,
  },
  data() {
    return {
      snackbar: false,
      snackbarMessage: null,
      form: {
        name: null,
        email: null,
        message: null,
      },
    };
  },
  methods: {
    async submit(event) {
      event.preventDefault();
      const isValid = this.$refs.form.validate();
      if (!isValid) {
        return;
      }

      try {
        await axios.post(
          "/",
          qs.stringify({
            "form-name": "contact",
            ...this.form,
          }),
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          }
        );

        this.snackbarMessage = "Message Sent!";
        this.$refs.form.reset();
      } catch (error) {
        this.snackbarMessage = "Oops! Something went wrong";
      }

      this.snackbar = true;
    },
  },
};
</script>
<style>
.required label::before {
  content: "* ";
  color: brown;
}
</style>