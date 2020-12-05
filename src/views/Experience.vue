<template>
  <Section label="Experience" class="orange lighten-2">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(e, index) in experience" :key="index">
        <v-expansion-panel-header>
          <div>
            <div class="body-1 font-weight-bold">{{ e.title }}</div>
            <span class="body-2 grey--text font-weight-light"
              >{{ e.organization }}, {{ formatDate(e.startDate) }} — {{ formatDate(e.endDate) }}</span
            >
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <block-content :blocks="e.accomplishments"></block-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </Section>
</template>

<script>
import moment from 'moment';
import Section from "@/components/Section";
import BlockContent from "@/components/BlockContent";

export default {
  components: {
    Section,
    BlockContent
  },
  data() {
    return {
      experience: [],
    };
  },
  async created() {
    this.experience = await this.$api.getExperience();
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