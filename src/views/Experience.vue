<template>
  <home-section label="Experience" color="#7E4E52">
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(e, index) in experience" :key="index">
        <v-expansion-panel-header class="px-4 py-3">
          <div>
            <div class="text-subtitle-2 font-weight-bold">{{ e.title }}</div>
            <span class="text-caption grey--text font-weight-light"
              >{{ e.organization }}, {{ formatDate(e.startDate) }} — {{ formatDate(e.endDate) }}</span
            >
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <block-content :blocks="e.accomplishments"></block-content>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </home-section>
</template>

<script>
import moment from 'moment';
import HomeSection from "@/components/HomeSection";
import BlockContent from "@/components/BlockContent";

export default {
  components: {
    HomeSection,
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