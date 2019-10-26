<template>
  <Section label="Experience" class="orange lighten-2">
    <v-timeline dense dark align-top>
      <v-timeline-item
        v-for="e in experience"
        :key="e.dates"
        color="blue-grey darken-2"
        small
      >
        <v-layout row wrap class="my-1">
          <v-flex xs12 md6>
            <div class="title white--text font-weight-medium">{{e.title}}</div>
            <div class="white--text font-weight-light mt-1">
              {{e.dates}}
              <br />
              {{e.place}}
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <div
                v-for="(accomplishment, index) in e.accomplishments"
                :key="index"
                class="subheading white--text font-italic font-weight-thin mb-3"
              >— {{accomplishment}}</div>
          </v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
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
          title: "Bachelor, Computer Science",
          place: "UW Milwaukee",
          accomplishments: [
            "UWM Engineering Excellence Scholarship recipient",
            "Graduated Magna Cum Laude, 3.654 GPA",
            "Satya Nadella got his degree here. He seems to be doing ok..."
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
          dates: "May 2019 — Present",
          title: "New Application Developer",
          place: "Church Mutual",
          accomplishments: [
            "Technical lead for a system to manage brokers, agents and sales representatives",
            "Suggest, pilot, and eventually introduce vue.js as the new company standard for creating frontend applications",
            "Member of a core group of individuals in charge of implementing CI/CD and other DevOps initiatives"
          ]
        }
      ]
    };
  }
};
</script>


