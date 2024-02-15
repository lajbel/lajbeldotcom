import type enLocales from "./en_locales";

export type LocaleMap = typeof enLocales;
export type LocaleKeys = {
    [K in keyof LocaleMap]: keyof LocaleMap[K];
}

export type TranslationString = {
    [K in keyof LocaleKeys]: `${K}.${LocaleKeys[K]}`;
}[keyof LocaleKeys];
