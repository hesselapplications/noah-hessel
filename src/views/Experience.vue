<template>
  <Section label="Experience" class="orange lighten-2">
    <v-expansion-panel>
      <v-expansion-panel-content v-for="e in experience" :key="e.dates">
        <template v-slot:header>
          <div>
            <div class="subheading font-weight-bold">{{e.title}}</div>
            <span class="body-1 grey--text font-weight-light">{{e.place}}, {{e.dates}}</span>
          </div>
        </template>
        <ul class="mb-3">
          <li
            v-for="accomplishment in e.accomplishments"
            :key="accomplishment"
            class="body-1 font-weight-thin ml-3"
            v-html="accomplishment"
          ></li>
        </ul>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </Section>
</template>

<script>
import Section from "@/components/Section";

export default {
  components: {
    Section
  },
  data() {
    return {
      experience: [
        {
          dates: "Sep 2014 — Dec 2017",
          title: "Bachelor of Science, Computer Science",
          place: "UW Milwaukee",
          accomplishments: [
            "UWM Engineering Excellence Scholarship recipient",
            "Graduated Magna Cum Laude, 3.654 GPA"
          ]
        },
        {
          dates: "Jun 2016 — Aug 2016",
          title: "Application Developer Intern",
          place: "Church Mutual",
          accomplishments: [
            "Built a UI and rest service for fetching common insurance data",
            "Created a UI for uploading documents into our content management system"
          ]
        },
        {
          dates: "Jun 2017 — Aug 2017",
          title: "Application Developer Intern",
          place: "Church Mutual",
          accomplishments: [
            "Built a UI used in processing claims",
            "Implemented a REST service for checking if a business entity is affiliated with any terrorist groups"
          ]
        },
        {
          dates: "Jan 2018 — May 2019",
          title: "Associate Developer",
          place: "Church Mutual",
          accomplishments: [
            "Wrote 17 integration applications facilitating a new policy administration system",
            "Technical lead and mentor for 3 summer interns, completing 3 projects"
          ]
        },
        {
          dates: "May 2019 — May 2020",
          title: "New Application Developer",
          place: "Church Mutual",
          accomplishments: [
            "Technical lead for a system to manage brokers, agents and sales representatives",
            "Suggest, pilot, and eventually introduce vue.js as the new company standard for creating frontend applications",
            "Wrote multiple libraries to ease development at Church Mutual. Used by nearly all of our spring boot apps.",
            "Obtained <a href='https://triplebyte.com/tb/noah-hessel-wchqpb1/certificate/track/generalist'> Triplebyte Generalist Certification</a>"
          ]
        },
        {
          dates: "May 2020 — Present",
          title: "Advisory Application Developer",
          place: "Church Mutual",
          accomplishments: [
            "Co-lead team of 5 developers implementing Church Mutual's first external facing insured and producer portal",
            "Obtained <a href='https://triplebyte.com/tb/noah-hessel-wchqpb1/certificate/track/frontend'>Triplebyte Front End Certification</a>"
          ]
        }
      ]
    };
  }
};
</script>


