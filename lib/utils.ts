type Money = { amount: number; currency: string };

export function invariant(
  condition: unknown,
  message: string,
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Formats a given amount of money into a localized currency string.
 *
 * @param amount - The amount of money to format.
 * @param currency - The 3-letter currency code (e.g., "USD", "EUR").
 * @param locale - Optional. The locale string to use for formatting (default is "es-GT").
 * @returns The formatted money string according to the specified locale and currency.
 * @throws Will throw an error if the currency code is not a 3-letter code.
 */
export const formatMoney = ({
  amount,
  currency,
  locale = "es-GT",
}: Money & { locale?: string }) => {
  invariant(currency.length === 3, "currency needs to be a 3-letter code");

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};
