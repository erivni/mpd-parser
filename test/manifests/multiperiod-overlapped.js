export const parsedManifest = {
  allowCache: true,
  discontinuityStarts: [],
  segments: [],
  endList: true,
  mediaGroups: {
    'AUDIO': {
      audio: {
        'en (main)': {
          language: 'en',
          autoselect: true,
          default: true,
          playlists: [
            {
              attributes: {
                'NAME': 'default_audio96_2',
                'BANDWIDTH': 93000,
                'CODECS': 'mp4a.40.2',
                'PROGRAM-ID': 1
              },
              uri: '',
              endList: true,
              timeline: 0,
              resolvedUri: '',
              targetDuration: 2,
              discontinuitySequence: 0,
              discontinuityStarts: [
                3
              ],
              timelineStarts: [
                {
                  start: 0,
                  timeline: 0
                },
                {
                  start: 5.972633333,
                  timeline: 5.972633333
                }
              ],
              mediaSequence: 0,
              segments: [
                {
                  uri: 'https://example.com/default_audio96_2/segment0.m4f',
                  timeline: 0,
                  duration: 1.9969160997732427,
                  resolvedUri: 'https://example.com/default_audio96_2/segment0.m4f',
                  number: 0,
                  presentationTime: 0,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init0.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init0.m4f'
                  }
                },
                {
                  uri: 'https://example.com/default_audio96_2/segment1.m4f',
                  timeline: 0,
                  duration: 1.9969160997732427,
                  resolvedUri: 'https://example.com/default_audio96_2/segment1.m4f',
                  number: 1,
                  presentationTime: 1.9969160997732427,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init0.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init0.m4f'
                  }
                },
                {
                  uri: 'https://example.com/default_audio96_2/segment2.m4f',
                  timeline: 0,
                  duration: 1.9969160997732427,
                  resolvedUri: 'https://example.com/default_audio96_2/segment2.m4f',
                  number: 2,
                  presentationTime: 3.9938321995464854,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init0.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init0.m4f'
                  }
                },
                {
                  uri: 'https://example.com/default_audio96_2/segment3.m4f',
                  timeline: 5.972633333,
                  duration: 1.9969160997732427,
                  resolvedUri: 'https://example.com/default_audio96_2/segment3.m4f',
                  number: 3,
                  presentationTime: 0.0000029475124714295475,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init1.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init1.m4f'
                  },
                  discontinuity: true
                },
                {
                  uri: 'https://example.com/default_audio96_2/segment4.m4f',
                  timeline: 5.972633333,
                  duration: 1.9969160997732427,
                  resolvedUri: 'https://example.com/default_audio96_2/segment4.m4f',
                  number: 4,
                  presentationTime: 1.9969190472857146,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init1.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init1.m4f'
                  }
                },
                {
                  uri: 'https://example.com/default_audio96_2/segment5.m4f',
                  timeline: 5.972633333,
                  duration: 0.8591383219954648,
                  resolvedUri: 'https://example.com/default_audio96_2/segment5.m4f',
                  number: 5,
                  presentationTime: 3.993835147058957,
                  map: {
                    uri: 'https://example.com/default_audio96_2/init1.m4f',
                    resolvedUri: 'https://example.com/default_audio96_2/init1.m4f'
                  },
                  last: true
                }
              ]
            }
          ],
          uri: ''
        }
      }
    },
    'VIDEO': {},
    'CLOSED-CAPTIONS': {},
    'SUBTITLES': {}
  },
  uri: '',
  duration: 36.269,
  playlists: [
    {
      attributes: {
        'NAME': 'default_video900_1_640x360',
        'AUDIO': 'audio',
        'SUBTITLES': 'subs',
        'RESOLUTION': {
          width: 640,
          height: 360
        },
        'CODECS': 'avc1.4d001e',
        'BANDWIDTH': 884000,
        'PROGRAM-ID': 1,
        'FRAME-RATE': 29.97
      },
      uri: '',
      endList: true,
      timeline: 0,
      resolvedUri: '',
      targetDuration: 3,
      discontinuityStarts: [
        3
      ],
      timelineStarts: [
        {
          start: 0,
          timeline: 0
        },
        {
          start: 5.972633333,
          timeline: 5.972633333
        }
      ],
      segments: [
        {
          uri: 'https://example.com/default_video900_1_640x360/segment0.m4f',
          timeline: 0,
          duration: 2.002,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment0.m4f',
          number: 0,
          presentationTime: 0,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init0.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init0.m4f'
          }
        },
        {
          uri: 'https://example.com/default_video900_1_640x360/segment1.m4f',
          timeline: 0,
          duration: 2.002,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment1.m4f',
          number: 1,
          presentationTime: 2.002,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init0.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init0.m4f'
          }
        },
        {
          uri: 'https://example.com/default_video900_1_640x360/segment2.m4f',
          timeline: 0,
          duration: 2.002,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment2.m4f',
          number: 2,
          presentationTime: 4.004,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init0.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init0.m4f'
          }
        },
        {
          // no overlapped segments.
          // new segments are from 5.972633333 timeline.
          uri: 'https://example.com/default_video900_1_640x360/segment3.m4f',
          timeline: 5.972633333,
          duration: 1.9352666666666667,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment3.m4f',
          number: 3,
          presentationTime: 0.00003333300000019079,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init1.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init1.m4f'
          },
          discontinuity: true
        },
        {
          uri: 'https://example.com/default_video900_1_640x360/segment4.m4f',
          timeline: 5.972633333,
          duration: 1.9352666666666667,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment4.m4f',
          number: 4,
          presentationTime: 1.9352999996666664,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init1.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init1.m4f'
          }
        },
        {
          uri: 'https://example.com/default_video900_1_640x360/segment5.m4f',
          timeline: 5.972633333,
          duration: 0.9676333333333333,
          resolvedUri: 'https://example.com/default_video900_1_640x360/segment5.m4f',
          number: 5,
          presentationTime: 3.8705666663333336,
          map: {
            uri: 'https://example.com/default_video900_1_640x360/init1.m4f',
            resolvedUri: 'https://example.com/default_video900_1_640x360/init1.m4f'
          },
          last: true
        }
      ],
      mediaSequence: 0,
      discontinuitySequence: 0
    }
  ],
  timelineStarts: [
    {
      start: 0,
      timeline: 0
    },
    {
      start: 5.972633333,
      timeline: 5.972633333
    }
  ]
};
