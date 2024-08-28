import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import zhTranslation from './locales/zh/translation.json';

i18n
  .use(LanguageDetector)  // 使用浏览器语言检测器
  .use(initReactI18next)   // 将 i18n 与 React 结合
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
    },
    fallbackLng: 'en',   // 默认语言
    interpolation: {
      escapeValue: false, // React 已经安全地处理了转义
    },
  });

export default i18n;
