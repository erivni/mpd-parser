/**
 * Converts the provided string that may contain a division operation to a number.
 *
 * @param {string} value - the provided string value
 *
 * @return {number} the parsed string value
 */
export const parseDivisionValue = (value) => {
  return parseFloat(value.split('/').reduce((prev, current) => prev / current));
};

export const resolveUrl = (baseUrl, relativePath) => {
  if (baseUrl.endsWith('/')) {
    return baseUrl + relativePath;
  }

  let idx = baseUrl.lastIndexOf('/');

  if (!relativePath.startsWith('/')) {
    idx += 1;
  }
  return baseUrl.substring(0, idx) + relativePath;
};
