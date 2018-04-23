import Intl from "intl";
import "intl/locale-data/jsonp/en";
import "intl/locale-data/jsonp/fr";
import "intl/locale-data/jsonp/de";

const titles = {
  fr: "titre default",
  en: "default title",
};

const descriptions = {
  fr:
    "description default",
  en:
    "default description",
};

const LOCALE = window.navigator.userLanguages || window.navigator.languages;
const LOCALE_OVERRIDE = null,

export const commonConfig = {
  LOCALE_OVERRIDE: LOCALE_OVERRIDE,
  LOCALE: LOCALE;
  KNOW_COUNTRIES: ["fr", "en"];
  VERSION: "0.1.0",
  APP_TYPE: "browser",

  GOOGLE_CLIENT_ID: null,

  META_TITLE: titles[LOCALE_OVERRIDE || LOCALE],
  META_DESCRIPTION: descriptions[LOCALE_OVERRIDE || LOCALE],
  META_IMAGE: null,
};
