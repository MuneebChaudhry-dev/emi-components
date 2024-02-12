import { en } from '@formkit/i18n';
import { generateClasses } from '@formkit/themes';
import { type DefaultConfigOptions } from '@formkit/vue';
import formKitCustomTheme from './formkit-custom-theme';
import { createProPlugin, inputs } from '@formkit/pro';

import { createMultiStepPlugin } from '@formkit/addons';
import '@formkit/addons/css/multistep';

const formkitPro = createProPlugin(
  import.meta.env.VITE_FORMKIT_PROJECT_ID,
  inputs
);
const config: DefaultConfigOptions = {
  locales: { en },
  locale: 'en',
  config: {
    classes: generateClasses(formKitCustomTheme),
  },
  plugins: [createMultiStepPlugin(), formkitPro],
};

export default config;
