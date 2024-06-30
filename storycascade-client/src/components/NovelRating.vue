<template>
  <v-dialog transition="dialog-bottom-transition" max-width="700px">
    <template v-slot:activator="{ props: activatorProps }">
      <div v-bind="activatorProps" class="d-flex cursor-pointer">
        <div class="mr-3 text-green-accent-1">8.33</div>
        <div class="text-subtitle-2">1008</div>
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Rate the novel">
        <v-divider />
        <v-card-text>
          <div class="text-center">
            <v-rating
              length="10"
              v-model="rating"
              :item-labels="labels"
              empty-icon="mdi-heart-outline"
              full-icon="mdi-heart"
              half-icon="mdi-heart-half"
              half-increments
              hover
            >
              <template v-slot:item-label="props">
                <span :class="`text-${colors[props.index]}`" class="font-weight-black text-caption">
                  {{ props.label }}
                </span>
              </template>
            </v-rating>
            <pre class="text-high-emphasis">{{ rating }}</pre>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const rating = ref(-1);

const colors = ref([
  'brown',
  'red',
  'orange',
  'yellow',
  'light-green',
  'green-accent-2',
  'green-darken-3',
  'green-darken-4',
  'purple',
  'blue',
]);
const labels = ref(['terrible', 'bad', 'so so', 'poor', 'fair', 'ok', 'good', 'great', 'demon', 'divine']);
</script>

<style scoped></style>
