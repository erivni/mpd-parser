export const parsedManifest = {
  allowCache: true,
  discontinuityStarts: [],
  duration: 10,
  endList: true,
  mediaGroups: {
    'AUDIO': {},
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
                'BANDWIDTH': 428,
                'CODECS': 'wvtt',
                'MIME_TYPE': 'application/mp4',
                'NAME': '18',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: 'https://example.com/wvtt/',
              segments: [
                {
                  duration: 4,
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'https://example.com/wvtt/18/0001.m4s',
                  timeline: 0,
                  uri: '18/0001.m4s'
                },
                {
                  duration: 4,
                  number: 1,
                  presentationTime: 4,
                  resolvedUri: 'https://example.com/wvtt/18/0002.m4s',
                  timeline: 0,
                  uri: '18/0002.m4s'
                },
                {
                  duration: 2,
                  last: true,
                  number: 2,
                  presentationTime: 8,
                  resolvedUri: 'https://example.com/wvtt/18/0003.m4s',
                  timeline: 0,
                  uri: '18/0003.m4s'
                }
              ],
              targetDuration: 4,
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
        },
        nl: {
          autoselect: false,
          default: false,
          language: 'nl',
          playlists: [
            {
              attributes: {
                'BANDWIDTH': 429,
                'CODECS': 'wvtt',
                'MIME_TYPE': 'application/mp4',
                'NAME': '22',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: 'https://example.com/wvtt/',
              segments: [
                {
                  duration: 4,
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'https://example.com/wvtt/22/0001.m4s',
                  timeline: 0,
                  uri: '22/0001.m4s'
                },
                {
                  duration: 4,
                  number: 1,
                  presentationTime: 4,
                  resolvedUri: 'https://example.com/wvtt/22/0002.m4s',
                  timeline: 0,
                  uri: '22/0002.m4s'
                },
                {
                  duration: 2,
                  last: true,
                  number: 2,
                  presentationTime: 8,
                  resolvedUri: 'https://example.com/wvtt/22/0003.m4s',
                  timeline: 0,
                  uri: '22/0003.m4s'
                }
              ],
              targetDuration: 4,
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
        'BANDWIDTH': 386437,
        'CODECS': 'avc1.64001f',
        'FRAME-RATE': 24,
        'NAME': '1',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 288,
          width: 512
        },
        'SUBTITLES': 'subs'
      },
      discontinuitySequence: 0,
      discontinuityStarts: [],
      endList: true,
      mediaSequence: 0,
      resolvedUri: '',
      segments: [
        {
          duration: 4,
          map: {
            resolvedUri: 'https://example.com/wvtt/1/init.mp4',
            uri: '1/init.mp4'
          },
          number: 0,
          presentationTime: 0,
          resolvedUri: 'https://example.com/wvtt/1/0001.m4s',
          timeline: 0,
          uri: '1/0001.m4s'
        },
        {
          duration: 4,
          map: {
            resolvedUri: 'https://example.com/wvtt/1/init.mp4',
            uri: '1/init.mp4'
          },
          number: 1,
          presentationTime: 4,
          resolvedUri: 'https://example.com/wvtt/1/0002.m4s',
          timeline: 0,
          uri: '1/0002.m4s'
        },
        {
          duration: 2,
          last: true,
          map: {
            resolvedUri: 'https://example.com/wvtt/1/init.mp4',
            uri: '1/init.mp4'
          },
          number: 2,
          presentationTime: 8,
          resolvedUri: 'https://example.com/wvtt/1/0003.m4s',
          timeline: 0,
          uri: '1/0003.m4s'
        }
      ],
      targetDuration: 4,
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
