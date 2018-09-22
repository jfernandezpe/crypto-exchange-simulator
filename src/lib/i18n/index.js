import VueI18n from 'vue-i18n';

import messages from '../../assets/translations/index';

const i18nSetup = () => new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'es',
  messages,
});


export {
  VueI18n,
  i18nSetup,
};
