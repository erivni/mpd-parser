export const parsedManifest = {
  allowCache: true,
  discontinuityStarts: [],
  duration: 30,
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
                'BANDWIDTH': 32000,
                'CODECS': 'mp4a.40.2',
                'NAME': '2',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [
                {
                  duration: 5,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'https://www.example.com/audio/segment_0.m4f',
                  timeline: 0,
                  uri: 'audio/segment_0.m4f'
                },
                {
                  duration: 5,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 1,
                  presentationTime: 5,
                  resolvedUri: 'https://www.example.com/audio/segment_1.m4f',
                  timeline: 0,
                  uri: 'audio/segment_1.m4f'
                },
                {
                  duration: 5,
                  last: true,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 2,
                  presentationTime: 10,
                  resolvedUri: 'https://www.example.com/audio/segment_2.m4f',
                  timeline: 0,
                  uri: 'audio/segment_2.m4f'
                }
              ],
              targetDuration: 5,
              setAvailableEndMargin: false,
              setAvailableStartMargin: true,
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
                'BANDWIDTH': 32000,
                'CODECS': 'mp4a.40.2',
                'NAME': '2',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 1,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [
                {
                  duration: 5,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 0,
                  presentationTime: 15,
                  resolvedUri: 'https://www.example.com/audio/segment_0.m4f',
                  timeline: 15,
                  uri: 'audio/segment_0.m4f'
                },
                {
                  duration: 5,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 1,
                  presentationTime: 20,
                  resolvedUri: 'https://www.example.com/audio/segment_1.m4f',
                  timeline: 15,
                  uri: 'audio/segment_1.m4f'
                },
                {
                  duration: 5,
                  last: true,
                  map: {
                    resolvedUri: 'https://www.example.com/audio/init.m4f',
                    uri: 'audio/init.m4f'
                  },
                  number: 2,
                  presentationTime: 25,
                  resolvedUri: 'https://www.example.com/audio/segment_2.m4f',
                  timeline: 15,
                  uri: 'audio/segment_2.m4f'
                }
              ],
              targetDuration: 5,
              setAvailableEndMargin: true,
              setAvailableStartMargin: false,
              timeline: 15,
              timelineStarts: [
                {
                  start: 15,
                  timeline: 15
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
    'SUBTITLES': {},
    'VIDEO': {}
  },
  playlists: [
    {
      attributes: {
        'AUDIO': 'audio',
        'BANDWIDTH': 100000,
        'CODECS': 'avc1.4d001f',
        'FRAME-RATE': 24,
        'NAME': '1',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 200,
          width: 480
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
          duration: 5,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 0,
          presentationTime: 0,
          resolvedUri: 'https://www.example.com/video/segment_0.m4f',
          timeline: 0,
          uri: 'video/segment_0.m4f'
        },
        {
          duration: 5,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 1,
          presentationTime: 5,
          resolvedUri: 'https://www.example.com/video/segment_1.m4f',
          timeline: 0,
          uri: 'video/segment_1.m4f'
        },
        {
          duration: 5,
          last: true,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 2,
          presentationTime: 10,
          resolvedUri: 'https://www.example.com/video/segment_2.m4f',
          timeline: 0,
          uri: 'video/segment_2.m4f'
        }
      ],
      targetDuration: 5,
      setAvailableEndMargin: false,
      setAvailableStartMargin: true,
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
        'AUDIO': 'audio',
        'BANDWIDTH': 100000,
        'CODECS': 'avc1.4d001f',
        'FRAME-RATE': 24,
        'NAME': '1',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 200,
          width: 480
        },
        'SUBTITLES': 'subs'
      },
      discontinuitySequence: 1,
      discontinuityStarts: [],
      endList: true,
      mediaSequence: 0,
      resolvedUri: '',
      segments: [
        {
          duration: 5,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 0,
          presentationTime: 15,
          resolvedUri: 'https://www.example.com/video/segment_0.m4f',
          timeline: 15,
          uri: 'video/segment_0.m4f'
        },
        {
          duration: 5,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 1,
          presentationTime: 20,
          resolvedUri: 'https://www.example.com/video/segment_1.m4f',
          timeline: 15,
          uri: 'video/segment_1.m4f'
        },
        {
          duration: 5,
          last: true,
          map: {
            resolvedUri: 'https://www.example.com/video/init.m4f',
            uri: 'video/init.m4f'
          },
          number: 2,
          presentationTime: 25,
          resolvedUri: 'https://www.example.com/video/segment_2.m4f',
          timeline: 15,
          uri: 'video/segment_2.m4f'
        }
      ],
      targetDuration: 5,
      setAvailableEndMargin: true,
      setAvailableStartMargin: false,
      timeline: 15,
      timelineStarts: [
        {
          start: 15,
          timeline: 15
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
    },
    {
      start: 15,
      timeline: 15
    }
  ],
  uri: ''
};
