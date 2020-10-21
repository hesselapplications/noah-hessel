<template>
  <Section label="Experience" class="orange lighten-2">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(e, index) in experience" :key="index">
        <v-expansion-panel-header>
          <div>
            <div class="body-1 font-weight-bold">{{ e.title }}</div>
            <span class="body-2 grey--text font-weight-light"
              >{{ e.organization }}, {{ formatDate(e.start_date) }} — {{ formatDate(e.end_date) }}</span
            >
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <prismic-rich-text :field="e.accomplishments"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </Section>
</template>

<script>
import moment from 'moment';
import Section from "@/components/Section";

export default {
  components: {
    Section,
  },
  data() {
    return {
      experience: [],
    };
  },
  async created() {
    var { data } = await this.$prismic.client.getSingle("experience");
    this.experience = data.experience;
  },
  methods: {
    formatDate(date) {
      if (date == null) return "Present";
      return moment(date).format('MMM YYYY');
    }
  }
};
</script>
<style scoped>
.v-expansion-panel-content {
  font-size: 14px !important;
}

.v-expansion-panel-content >>> ul {
  list-style-type: circle;
}
</style>