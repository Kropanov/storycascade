<template>
  <v-container>
    <v-row align="start" no-gutters>
      <v-col cols="12" sm="12" md="6" lg="5" xl="4">
        <ProfileHeader />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="7" xl="8">
        <ProfileTabs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ProfileHeader from '@/components/ProfileHeader.vue';
import ProfileTabs from '@/components/ProfileTabs.vue';
</script>

<style scoped></style>
