/**
 * Calculates the R (repetition) value for a live stream (for the final segment
 * in a manifest where the r value is negative 1)
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {number} time
 *        current time (typically the total time up until the final segment)
 * @param {number} duration
 *        duration property for the given <S />
 *
 * @return {number}
 *        R value to reach the end of the given period
 */
const getLiveRValue = (attributes, time, duration) => {
  const {
    NOW,
    clientOffset,
    availabilityStartTime,
    timescale = 1,
    periodStart = 0,
    minimumUpdatePeriod = 0
  } = attributes;
  const now = (NOW + clientOffset) / 1000;
  const periodStartWC = availabilityStartTime + periodStart;
  const periodEndWC = now + minimumUpdatePeriod;
  const periodDuration = periodEndWC - periodStartWC;

  return Math.ceil(((periodDuration * timescale) - time) / duration);
};

/**
 * Uses information provided by SegmentTemplate.SegmentTimeline to determine segment
 * timing and duration
 *
 * @param {Object} attributes
 *        Object containing all inherited attributes from parent elements with attribute
 *        names as keys
 * @param {Object[]} segmentTimeline
 *        List of objects representing the attributes of each S element contained within
 *
 * @return {{number: number, duration: number, time: number, timeline: number}[]}
 *         List of Objects with segment timing and duration info
 */
export const parseByTimeline = (attributes, segmentTimeline) => {
  const {
    type,
    minimumUpdatePeriod = 0,
    media = '',
    sourceDuration,
    timescale = 1,
    startNumber = 1,
    periodStart: timeline
  } = attributes;
  const segments = [];
  let time = -1;

  for (let sIndex = 0; sIndex < segmentTimeline.length; sIndex++) {
    const S = segmentTimeline[sIndex];
    let duration = S.d;
    const repeat = S.r || 0;
    const segmentTime = S.t || 0;

    if (time < 0) {
      // first segment
      time = segmentTime;
    }

    let count;

    if (repeat < 0) {
      const nextS = sIndex + 1;

      if (nextS === segmentTimeline.length) {
        // last segment
        if (type === 'dynamic' &&
            minimumUpdatePeriod > 0 &&
            media.indexOf('$Number$') > 0) {
          count = getLiveRValue(attributes, time, duration);
        } else {
          // TODO: This may be incorrect depending on conclusion of TODO above
          count = ((sourceDuration * timescale) - time) / duration;
        }
      } else {
        count = (segmentTimeline[nextS].t - time) / duration;
      }
    } else {
      count = repeat + 1;
    }

    const end = startNumber + segments.length + count;
    let number = startNumber + segments.length;

    //  check if next segment as a t set
    const nextS = sIndex + 1 < segmentTimeline.length ? segmentTimeline[sIndex + 1] : undefined;

    while (number < end) {
      if (number + 1 === end) {
        if (nextS && nextS.t && (nextS.t - time + duration !== 0)) {
          // discontinuity -
          // if t is set in next segment and its timing is not as expected
          // adjust current duration accordingly
          duration = nextS.t - time;
        }
      }

      segments.push({ number, duration: duration / timescale, time, timeline });
      time += duration;
      number++;
    }
  }

  return segments;
};
