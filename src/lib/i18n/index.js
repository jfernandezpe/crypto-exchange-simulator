import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from '../../assets/translations/index';

Vue.use(VueI18n);

const i18nSetup = () => new VueI18n({
  locale: 'es', // set locale
  fallbackLocale: 'es',
  messages,
});


export default i18nSetup;
