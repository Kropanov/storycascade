// fetch.js
import { ref, watchEffect, toValue } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  watchEffect(async () => {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    const urlValue = toValue(url);

    try {
      const res = await fetch('api/v1' + urlValue);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  });

  return { data, error };
}
