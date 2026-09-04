/** Shared constants for the BrainDrop landing site. */

export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=by.freiding.braindrop";

export const SITE_NAME = "BrainDrop";

/**
 * Public contact address for the legal pages (privacy inquiries, questions
 * about the Terms, support). Shown on /privacy/, /privacy/en/, /terms/ and
 * /terms/en/; must match the contact e-mail on the Google Play listing.
 */
export const CONTACT_EMAIL = "yauheni.bahatyrou@gmail.com";

export const SITE_DESCRIPTION =
  "BrainDrop — тренажёр английского для русскоязычных: неправильные глаголы, 12 времён и фразовые глаголы. Работает офлайн, без аккаунта и рекламы. Android.";

/** Content figures — sourced from the app code; update here if the app changes. */
export const STATS = {
  verbs: 179,
  verbGroups: 12,
  tenses: 12,
  phrasal: 72,
  phrasalCategories: 6,
  quizTypes: 3,
} as const;
