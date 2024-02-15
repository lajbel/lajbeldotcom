import enLocales from "./en_locales";
import esLocales from "./es_locales";
import type { LocaleKeys, LocaleMap, TranslationString } from "./types";

const localeMapByLocale = {
    en: enLocales,
    es: esLocales,
} as const;

function splitTranslationString(translationString: TranslationString) {
    return translationString.split(".");
}

function t(translationKey: TranslationString, locale?: string): string {
    const keys = splitTranslationString(translationKey);
    const localeKey = keys[0] as keyof LocaleKeys;
    const localeSubKey = keys[1] as keyof LocaleMap[typeof localeKey];
    const localeMap = enLocales;

    return localeMap[localeKey][localeSubKey];
}
