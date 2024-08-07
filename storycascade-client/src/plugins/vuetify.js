/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { THEME } from '@/utils/constants';

const custom = {
  dark: false,
  colors: {
    background: '#50687f',
    surface: '#733a3a',
    'surface-bright': '#FFFFFF',
    'surface-light': '#48A9A6',
    'surface-variant': '#424242',
    'on-surface-variant': '#d95b5b',
    primary: '#FFFFFF',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#FFA500',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.6,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
};

const light = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#E0E0E0',
    'surface-bright': '#FFFFFF',
    'surface-light': '#C3FDFF',
    'surface-variant': '#9E9E9E',
    'on-surface-variant': '#01579B',
    primary: '#01579B',
    'primary-darken-1': '#002F6C',
    secondary: '#4FC3F7',
    'secondary-darken-1': '#029EDC',
    error: '#FF6F00',
    info: '#03A9F4',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  variables: {
    'border-color': '#01579B',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.6,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
};

export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem(THEME) ?? 'dark',
    themes: {
      custom,
      light,
    },
  },
});
