/**
 * Shared shape for the bilingual legal documents (Privacy Policy, Terms).
 *
 * `p` blocks may contain inline HTML (links only); `list` blocks render as a
 * <ul>. The `ru` and `en` versions of a doc are kept section-for-section
 * identical so the translations cannot drift.
 */
export type LegalBlock = { p: string } | { list: string[] };

export interface LegalSection {
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  lang: "ru" | "en";
  /** og:locale */
  locale: string;
  /** <h1> and <title> */
  title: string;
  /** kicker line, already prefixed and upper-cased */
  updated: string;
  /** <meta name="description"> */
  description: string;
  /** intro paragraph under the title */
  lead: string;
  /** aria-label for the RU/EN switch */
  langSwitchLabel: string;
  sections: LegalSection[];
}
