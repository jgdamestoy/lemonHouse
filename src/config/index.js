let userLanguages =
  window.navigator.userLanguages || window.navigator.languages;
if (userLanguages && userLanguages[0]) {
  userLanguages = userLanguages[0].substring(0, 2);
}
if (userLanguages) {
  userLanguages = userLanguages.toLowerCase();
}

const LOCALE = userLanguages || "en";
const LOCALE_OVERRIDE = null;

export const config = {
  LOCALE_OVERRIDE: LOCALE_OVERRIDE,
  LOCALE: LOCALE,
  KNOW_COUNTRIES: ["fr", "en", "de", "es"],
  VERSION: "0.1.0",
  APP_TYPE: "browser",
  META_TITLE: "Lemon House Samui",
  META_DESCRIPTION: "A tiny hotel in Thaïland",
  META_IMAGE: null,
  GOOGLE_MAP_API_KEY: "AIzaSyAA5v8QPDKFRBkMtZzs_YjQUYksvTenfjM",
  GOOGLE_MAP_ZOOM: 12,
  GOOGLE_MAP_LAT: 9.5712776,
  GOOGLE_MAP_LNG: 99.99607370000001,
  GOOGLE_CLIENT_ID: null,
  BOOKING_ADRESS: "https://goo.gl/uCzDq5",
  BOOKING_EMAIL_ADRESS: "lemonhouse.samui@gmail.com",
  CDN: "",
  ALT_IMG: "/img/dog.jpg",
  FACEBBOK_URL: "https://www.facebook.com/Lemon-House-Samui-1077290535614338/",
  TWITTER_URL: "https://twitter.com/lemonhousesamui"
};
