import parse from 'html-react-parser';
import { I18n, TranslateOptions } from 'i18n-js';

import en from './lang.en';
import es from './lang.es';

// Load translations
const loadTranslations = () => ({ en, es });

const i18n = new I18n(loadTranslations());
// The default locale
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

export default {
  /**
   * Get a localized text
   *
   * @param {string} key - Name of the text.
   * @param {TranslateOptions} options - Some options, not really necessary.
   * @returns {string} The text in the correct locale
   */
  get(key: string, options: TranslateOptions = {}): string {
    return i18n.t(key, options); // Return raw text for standard use
  },

  /**
   * Get a localized text and render HTML content as React components.
   * This function is designed to parse HTML content embedded in translation strings.
   *
   * @param {string} key - Name of the text.
   * @param {TranslateOptions} options - Some options, not really necessary.
   * @returns {ReactNode} The text in the correct locale with parsed HTML as React components
   */
  getComponent({
    textKey,
    options = {},
  }: {
    textKey: string;
    options?: TranslateOptions;
  }): JSX.Element {
    const text = i18n.t(textKey, options);
    return <>{parse(text)}</>;
  },

  /**
   * Make sure to call this function with the locale of the user.
   * Set the locale (If no locale it will not change it, so it will be the default)
   *
   * @param {string} [locale] - The new locale.
   */
  setLocale(locale?: string | null): void {
    if (locale) i18n.locale = locale;
  },

  /**
   * Get the locale
   *
   * @returns {string} The locale.
   */
  getLocale(): string {
    return i18n.locale;
  },
};
