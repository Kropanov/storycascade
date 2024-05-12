// fetch.js
import { ref, watchEffect, toValue } from 'vue';

const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: 'GET',
};

export function useFetch(url, options) {
  const data = ref(null);
  const error = ref(null);

  const mergedOptions = { ...defaultOptions, ...options };

  watchEffect(async () => {
    // reset state before fetching..
    data.value = null;
    error.value = null;

    const urlValue = toValue(url);

    try {
      const res = await fetch(process.env.base + urlValue, mergedOptions);
      data.value = await res.json();
    } catch (e) {
      error.value = e;
    }
  });

  return { data, error };
}
