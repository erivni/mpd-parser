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

export const resolveSegmentUrl = (baseUrl, relativePath) => {
  /* resolveSegmentUrl will always get baseUrl as a full url */

  if (relativePath.startsWith('http')) {
    // e.g: https://example.com/z.ts
    return relativePath;
  }
  if (relativePath.startsWith('/')) {
    // e.g: http://a.com/b/cd/e.m3u8, /z.ts => http://a.com/z.ts
    const idx = baseUrl.indexOf('/', 8);

    return baseUrl.substring(0, idx) + relativePath;
  }

  let idx = baseUrl.lastIndexOf('/');

  if (!relativePath.startsWith('/')) {
    // e.g: http://a.com/b/cd/e.m3u8, z.ts => http://a.com/b/cd/z.ts
    idx += 1;
  }
  return baseUrl.substring(0, idx) + relativePath;
};

