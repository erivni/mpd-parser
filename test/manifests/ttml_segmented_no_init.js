export const parsedManifest = {
  allowCache: true,
  discontinuityStarts: [],
  duration: 30,
  endList: true,
  mediaGroups: {
    'AUDIO': {
      audio: {
        eng: {
          autoselect: true,
          default: true,
          language: 'eng',
          playlists: [
            {
              attributes: {
                'BANDWIDTH': 128000,
                'CODECS': 'mp4a.40.2',
                'NAME': 'EnglishAAC',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segmentinit.mp4',
                    uri: 'EnglishAAC/PID__mp4a_segmentinit.mp4'
                  },
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segment1.mp4',
                  timeline: 0,
                  uri: 'EnglishAAC/PID__mp4a_segment1.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segmentinit.mp4',
                    uri: 'EnglishAAC/PID__mp4a_segmentinit.mp4'
                  },
                  number: 1,
                  presentationTime: 6,
                  resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segment2.mp4',
                  timeline: 0,
                  uri: 'EnglishAAC/PID__mp4a_segment2.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segmentinit.mp4',
                    uri: 'EnglishAAC/PID__mp4a_segmentinit.mp4'
                  },
                  number: 2,
                  presentationTime: 12,
                  resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segment3.mp4',
                  timeline: 0,
                  uri: 'EnglishAAC/PID__mp4a_segment3.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segmentinit.mp4',
                    uri: 'EnglishAAC/PID__mp4a_segmentinit.mp4'
                  },
                  number: 3,
                  presentationTime: 18,
                  resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segment4.mp4',
                  timeline: 0,
                  uri: 'EnglishAAC/PID__mp4a_segment4.mp4'
                },
                {
                  duration: 6,
                  last: true,
                  map: {
                    resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segmentinit.mp4',
                    uri: 'EnglishAAC/PID__mp4a_segmentinit.mp4'
                  },
                  number: 4,
                  presentationTime: 24,
                  resolvedUri: 'http://example.com/EnglishAAC/PID__mp4a_segment5.mp4',
                  timeline: 0,
                  uri: 'EnglishAAC/PID__mp4a_segment5.mp4'
                }
              ],
              targetDuration: 6,
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
                'BANDWIDTH': 384000,
                'CODECS': 'ac-3',
                'NAME': 'DolbyAC3',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: '',
              segments: [
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segmentinit.mp4',
                    uri: 'DolbyAC3/PID__ac-3_segmentinit.mp4'
                  },
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segment1.mp4',
                  timeline: 0,
                  uri: 'DolbyAC3/PID__ac-3_segment1.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segmentinit.mp4',
                    uri: 'DolbyAC3/PID__ac-3_segmentinit.mp4'
                  },
                  number: 1,
                  presentationTime: 6,
                  resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segment2.mp4',
                  timeline: 0,
                  uri: 'DolbyAC3/PID__ac-3_segment2.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segmentinit.mp4',
                    uri: 'DolbyAC3/PID__ac-3_segmentinit.mp4'
                  },
                  number: 2,
                  presentationTime: 12,
                  resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segment3.mp4',
                  timeline: 0,
                  uri: 'DolbyAC3/PID__ac-3_segment3.mp4'
                },
                {
                  duration: 6,
                  map: {
                    resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segmentinit.mp4',
                    uri: 'DolbyAC3/PID__ac-3_segmentinit.mp4'
                  },
                  number: 3,
                  presentationTime: 18,
                  resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segment4.mp4',
                  timeline: 0,
                  uri: 'DolbyAC3/PID__ac-3_segment4.mp4'
                },
                {
                  duration: 6,
                  last: true,
                  map: {
                    resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segmentinit.mp4',
                    uri: 'DolbyAC3/PID__ac-3_segmentinit.mp4'
                  },
                  number: 4,
                  presentationTime: 24,
                  resolvedUri: 'http://example.com/DolbyAC3/PID__ac-3_segment5.mp4',
                  timeline: 0,
                  uri: 'DolbyAC3/PID__ac-3_segment5.mp4'
                }
              ],
              targetDuration: 6,
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
        ara: {
          autoselect: false,
          default: false,
          language: 'ara',
          playlists: [
            {
              attributes: {
                'BANDWIDTH': 354,
                'MIME_TYPE': 'application/ttml+xml',
                'NAME': 'ttml',
                'PROGRAM-ID': 1
              },
              discontinuitySequence: 0,
              discontinuityStarts: [],
              endList: true,
              mediaSequence: 0,
              resolvedUri: 'http://example.com/ttml/PID_ARA.ttml',
              segments: [
                {
                  duration: 10,
                  number: 0,
                  presentationTime: 0,
                  resolvedUri: 'http://example.com/ttml/ttml/PID_ARA.ttml',
                  timeline: 0,
                  uri: 'ttml/PID_ARA.ttml'
                },
                {
                  duration: 10,
                  number: 1,
                  presentationTime: 10,
                  resolvedUri: 'http://example.com/ttml/ttml/PID_ARA.ttml',
                  timeline: 0,
                  uri: 'ttml/PID_ARA.ttml'
                },
                {
                  duration: 10,
                  last: true,
                  number: 2,
                  presentationTime: 20,
                  resolvedUri: 'http://example.com/ttml/ttml/PID_ARA.ttml',
                  timeline: 0,
                  uri: 'ttml/PID_ARA.ttml'
                }
              ],
              targetDuration: 10,
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
        'BANDWIDTH': 7000000,
        'CODECS': 'avc1.4d4028',
        'FRAME-RATE': 25,
        'NAME': '7Mbps',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 1080,
          width: 1920
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
          duration: 10,
          map: {
            resolvedUri: 'http://example.com/7Mbps/PID__avc1_segmentinit.mp4',
            uri: '7Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 0,
          presentationTime: 0,
          resolvedUri: 'http://example.com/7Mbps/PID__avc1_segment1.mp4',
          timeline: 0,
          uri: '7Mbps/PID__avc1_segment1.mp4'
        },
        {
          duration: 10,
          map: {
            resolvedUri: 'http://example.com/7Mbps/PID__avc1_segmentinit.mp4',
            uri: '7Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 1,
          presentationTime: 10,
          resolvedUri: 'http://example.com/7Mbps/PID__avc1_segment2.mp4',
          timeline: 0,
          uri: '7Mbps/PID__avc1_segment2.mp4'
        },
        {
          duration: 10,
          last: true,
          map: {
            resolvedUri: 'http://example.com/7Mbps/PID__avc1_segmentinit.mp4',
            uri: '7Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 2,
          presentationTime: 20,
          resolvedUri: 'http://example.com/7Mbps/PID__avc1_segment3.mp4',
          timeline: 0,
          uri: '7Mbps/PID__avc1_segment3.mp4'
        }
      ],
      targetDuration: 10,
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
        'BANDWIDTH': 3000000,
        'CODECS': 'avc1.4d4028',
        'FRAME-RATE': 25,
        'NAME': '3Mbps',
        'PROGRAM-ID': 1,
        'RESOLUTION': {
          height: 1080,
          width: 1920
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
          duration: 10,
          map: {
            resolvedUri: 'http://example.com/3Mbps/PID__avc1_segmentinit.mp4',
            uri: '3Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 0,
          presentationTime: 0,
          resolvedUri: 'http://example.com/3Mbps/PID__avc1_segment1.mp4',
          timeline: 0,
          uri: '3Mbps/PID__avc1_segment1.mp4'
        },
        {
          duration: 10,
          map: {
            resolvedUri: 'http://example.com/3Mbps/PID__avc1_segmentinit.mp4',
            uri: '3Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 1,
          presentationTime: 10,
          resolvedUri: 'http://example.com/3Mbps/PID__avc1_segment2.mp4',
          timeline: 0,
          uri: '3Mbps/PID__avc1_segment2.mp4'
        },
        {
          duration: 10,
          last: true,
          map: {
            resolvedUri: 'http://example.com/3Mbps/PID__avc1_segmentinit.mp4',
            uri: '3Mbps/PID__avc1_segmentinit.mp4'
          },
          number: 2,
          presentationTime: 20,
          resolvedUri: 'http://example.com/3Mbps/PID__avc1_segment3.mp4',
          timeline: 0,
          uri: '3Mbps/PID__avc1_segment3.mp4'
        }
      ],
      targetDuration: 10,
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
