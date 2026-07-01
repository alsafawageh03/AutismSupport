// src/utils/moderationGuard.js

const BANNED_KEYWORDS = [
  // English Spam / Harmful behavior
  'scam', 'crypto-gift', 'freemoney', 'buy-followers', 'fake-cure',
];

/**
 * Checks if a string contains banned language, aggressive link spam, or toxic behavior.
 * @param {string} text - The raw body text from a post or comment.
 * @returns {{ safe: boolean, reason?: string }}
 */
export function checkContentSafety(text) {
  if (!text || typeof text !== 'string') return { safe: true };

  const sanitized = text.toLowerCase().trim();

  // 1. Scan against local bad-words dictionary
  const containsBanned = BANNED_KEYWORDS.some(keyword => sanitized.includes(keyword));
  if (containsBanned) {
    return {
      safe: false,
      reason: 'This text contains inappropriate or restricted content.'
    };
  }

  // 2. Prevent link-spamming (Protecting parents from predatory scams/unverified groups)
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  if (urlRegex.test(sanitized)) {
    return {
      safe: false,
      reason: 'غير مسموح بنشر الروابط الخارجية لحماية أعضاء المنصة. / External link sharing is restricted for community safety.'
    };
  }

  return { safe: true };
}