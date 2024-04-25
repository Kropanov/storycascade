<template>
  <div>
    <v-progress-circular
      class="progress-circular"
      :size="50"
      color="primary"
      v-if="loading"
      indeterminate
    ></v-progress-circular>

    <v-container v-else>
      <v-row align="start" no-gutters>
        <v-col cols="12" sm="12" md="6" lg="5" xl="4">
          <ProfileHeader :user="user" />
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="7" xl="8">
          <ProfileTabs />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useFetch } from '@/utils/fetch';
import { useRoute } from 'vue-router';
import ProfileTabs from '@/components/ProfileTabs.vue';
import ProfileHeader from '@/components/ProfileHeader.vue';

const loading = ref(true);
const user = ref({});

const route = useRoute();

const url = ref(`/users/${route.params.id}`);
const { data, error } = useFetch(url);

watch(
  () => data.value,
  () => {
    if (data && data.value) {
      user.value = data.value;
      loading.value = false;
    }
  },
);

watch(
  () => error.value,
  () => {
    if (error && error.value) {
      console.log(error.value);
    }
  },
);
</script>

<style scoped>
.progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
