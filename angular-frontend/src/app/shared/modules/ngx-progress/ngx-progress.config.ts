import { NgProgressConfig } from 'ngx-progressbar';

// For more configuration settings:
// @see https://github.com/MurhafSousli/ngx-progressbar
// Bar styles are handled by:
// @see /scss/vendors/_ngx-progress-bar.scss
export const ProgressConfig = {
  spinner: true,
  spinnerPosition: 'right',
  color: '#7ca7f4',
  thick: false,
  meteor: false,
  fixed: false
} as NgProgressConfig;
