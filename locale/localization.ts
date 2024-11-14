/**
 * This module configures internationalization (i18n) for the application using the `i18n-js` library.
 * It initializes the i18n instance with the provided translations and sets the default locale based on the device's locale.
 * Additionally, it enables fallback to a default language if a translation is missing.
 * The module also exports a function to dynamically change the locale at runtime.
 *
 * @module localization
 */

import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { translations } from "@/locale/translations";

export const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;

export const setLocale = (locale: string) => {
  i18n.locale = locale;
};
