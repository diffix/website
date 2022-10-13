import { derived } from "svelte/store";
import { page } from "$app/stores";

export const lang = derived(page, ($page) => (/^de$/i.test($page.params.lang) ? "de" : "en"));

export interface LocalizedString {
  en: string;
  de?: string;
}

export function mapLocalizedString(str: LocalizedString, fn: (str: string) => string): LocalizedString {
  return {
    en: fn(str.en),
    de: typeof str.de !== "undefined" ? fn(str.de) : undefined
  };
}

export const trans = derived(lang, ($lang) => (str: LocalizedString) => $lang === "de" && str.de ? str.de : str.en);

export function pathIncludesLanguage(path: string) {
  return /^\/(en|de)\//i.test(path + "/");
}

export function pathWithLang(path: string, lang: string) {
  if (path.endsWith("/")) {
    // Remove trailing slash.
    path = path.substring(0, path.length - 1);
  }

  if (!pathIncludesLanguage(path)) {
    return `/${lang}${path}`;
  }

  return `/${lang}` + path.substring(3);
}
