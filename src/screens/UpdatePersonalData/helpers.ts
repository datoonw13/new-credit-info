/**
 * Determine if email verification code is valid.
 */
export const isEmailCodeValid = (code: string) => code.length === 6;

/**
 * Determine if email verification code is invalid.
 */
export const isEmailCodeInvalid = (code: string) => !isEmailCodeValid(code);
