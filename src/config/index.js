const titles = {
  fr: "Lemon House Samui",
  en: "Lemon House Samui",
};

const descriptions = {
  fr:
    "a tiny hotel in samui",
  en:
    "a tiny hotel in samui",
};

//const LOCALE = window.navigator.userLanguages || window.navigator.languages;
const LOCALE = "fr";

const LOCALE_OVERRIDE = "fr";

export const config = {
  LOCALE_OVERRIDE: LOCALE_OVERRIDE,
  LOCALE: LOCALE,
  KNOW_COUNTRIES: ["fr", "en"],
  VERSION: "0.1.0",
  APP_TYPE: "browser",

  GOOGLE_CLIENT_ID: null,

  META_TITLE: titles[LOCALE_OVERRIDE || LOCALE],
  META_DESCRIPTION: descriptions[LOCALE_OVERRIDE || LOCALE],
  META_IMAGE: null,
  GOOGLE_MAP_API_KEY: "AIzaSyAA5v8QPDKFRBkMtZzs_YjQUYksvTenfjM"
};
