export const parsedManifest = {
  allowCache: true,
  discontinuityStarts: [],
  duration: 10.696,
  endList: true,
  mediaGroups: {
    'AUDIO': {
      audio: {
        en: {
          autoselect: true,
          default: true,
          language: 'en',
          playlists: [
            {
              attributes: {
                'BANDWIDTH': 320000,
                'CODECS': 'mp4a.40.5',
                'NAME': '2',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [],
              sidx: {
                byterange: {
                  length: 1604,
                  offset: 607
                },
                duration: 10.696,
                map: {
                  byterange: {
                    length: 607,
                    offset: 0
                  },
                  resolvedUri: 'https://example.com/ElephantsDream/audio.mp4',
                  uri: ''
                },
                number: 0,
                presentationTime: 0,
                resolvedUri: 'https://example.com/ElephantsDream/audio.mp4',
                timeline: 0,
                uri: 'https://example.com/ElephantsDream/audio.mp4'
              },
              targetDuration: 11,
              timeline: 0,
              timelineStarts: [
                {
                  start: 0,
                  timeline: 0
                }
              ],
              uri: ''
            },
            {
              attributes: {
                'BANDWIDTH': 192000,
                'CODECS': 'mp4a.40.5',
                'NAME': '3',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [],
              sidx: {
                byterange: {
                  length: 1604,
                  offset: 607
                },
                duration: 10.696,
                map: {
                  byterange: {
                    length: 607,
                    offset: 0
                  },
                  resolvedUri: 'https://example.com/ElephantsDream/ED-CM-5.1-DVD_length_fixed-653s-6-heaac-192000bps_seg.mp4',
                  uri: ''
                },
                number: 0,
                presentationTime: 0,
                resolvedUri: 'https://example.com/ElephantsDream/ED-CM-5.1-DVD_length_fixed-653s-6-heaac-192000bps_seg.mp4',
                timeline: 0,
                uri: 'https://example.com/ElephantsDream/ED-CM-5.1-DVD_length_fixed-653s-6-heaac-192000bps_seg.mp4'
              },
              targetDuration: 11,
              timeline: 0,
              timelineStarts: [
                {
                  start: 0,
                  timeline: 0
                }
              ],
              uri: ''
            }
          ],
          uri: ''
        }
      }
    },
    'CLOSED-CAPTIONS': {},
    'SUBTITLES': {
      subs: {
        en: {
          autoselect: false,
          default: false,
          language: 'en',
          playlists: [
            {
              attributes: {
                'BANDWIDTH': 256,
                'MIME_TYPE': 'text/vtt',
                'NAME': 'caption_en',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: 'https://example.com/ElephantsDream/ElephantsDream_en.vtt',
              segments: [
                {
                  duration: 10.696,
                  last: true,
                  number: 0,
                  resolvedUri: 'https://example.com/ElephantsDream/ElephantsDream_en.vtt',
                  timeline: 0,
                  uri: 'https://example.com/ElephantsDream/ElephantsDream_en.vtt'
                }
              ],
              targetDuration: 10.696,
              timeline: 0,
              timelineStarts: [
                {
                  start: 0,
                  timeline: 0
                }
              ],
              uri: ''
            }
          ],
          uri: ''
        }
      }
    },
    'VIDEO': {}
  },
  playlists: [
    {
      attributes: {
        'AUDIO': 'audio',
        'BANDWIDTH': 1500000,
        'CODECS': 'avc1.42c01e',
        'NAME': '1',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 480,
          width: 848
        },
        'SUBTITLES': 'subs'
      },
      discontinuitySequence: 0,
      discontinuityStarts: [],
      endList: true,
      mediaSequence: 0,
      resolvedUri: '',
      segments: [],
      sidx: {
        byterange: {
          length: 1604,
          offset: 685
        },
        duration: 10.696,
        map: {
          byterange: {
            length: 685,
            offset: 0
          },
          resolvedUri: 'https://example.com/ElephantsDream/video.mp4',
          uri: ''
        },
        number: 0,
        presentationTime: 0,
        resolvedUri: 'https://example.com/ElephantsDream/video.mp4',
        timeline: 0,
        uri: 'https://example.com/ElephantsDream/video.mp4'
      },
      targetDuration: 11,
      timeline: 0,
      timelineStarts: [
        {
          start: 0,
          timeline: 0
        }
      ],
      uri: ''
    }
  ],
  segments: [],
  timelineStarts: [
    {
      start: 0,
      timeline: 0
    }
  ],
  uri: ''
};
