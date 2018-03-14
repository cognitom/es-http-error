export const HttpStatusCodes = {
  'bad-request': {
    code: 400,
    en: 'Bad Request'
  },
  'unauthorized': {
    code: 401,
    en: 'Unauthorized'
  },
  'payment-required': {
    code: 402,
    en: 'Payment Required'
  },
  'forbidden': {
    code: 403,
    en: 'Forbidden'
  },
  'not-found': {
    code: 404,
    en: 'Not Found'
  },
  'method-not-allowed': {
    code: 405,
    en: 'Method Not Allowed'
  },
  'not-acceptable': {
    code: 406,
    en: 'Not Acceptable'
  },
  'proxy-authentication-required': {
    code: 407,
    en: 'Proxy Authentication Required'
  },
  'request-timeout': {
    code: 408,
    en: 'Request Timeout'
  },
  'conflict': {
    code: 409,
    en: 'Conflict'
  },
  'gone': {
    code: 410,
    en: 'Gone'
  },
  'length-required': {
    code: 411,
    en: 'Length Required'
  },
  'precondition-failed': {
    code: 412,
    en: 'Precondition Failed'
  },
  'payload-too-large': {
    code: 413,
    en: 'Payload Too Large'
  },
  'uri-too-long': {
    code: 414,
    en: 'URI Too Long'
  },
  'unsupported-media-type': {
    code: 415,
    en: 'Unsupported Media Type'
  },
  'range-not-satisfiable': {
    code: 416,
    en: 'Range Not Satisfiable'
  },
  'expectation-failed': {
    code: 417,
    en: 'Expectation Failed'
  },
  'ima-teapot': {
    code: 418,
    en: 'ImA Teapot'
  },
  'misdirected-request': {
    code: 421,
    en: 'Misdirected Request'
  },
  'unprocessable-entity': {
    code: 422,
    en: 'Unprocessable Entity'
  },
  'locked': {
    code: 423,
    en: 'Locked'
  },
  'failed-dependency': {
    code: 424,
    en: 'Failed Dependency'
  },
  'unordered-collection': {
    code: 425,
    en: 'Unordered Collection'
  },
  'upgrade-required': {
    code: 426,
    en: 'Upgrade Required'
  },
  'precondition-required': {
    code: 428,
    en: 'Precondition Required'
  },
  'too-many-requests': {
    code: 429,
    en: 'Too Many Requests'
  },
  'request-header-fields-too-large': {
    code: 431,
    en: 'Request Header Fields Too Large'
  },
  'unavailable-for-legal-reasons': {
    code: 451,
    en: 'Unavailable For Legal Reasons'
  },
  'internal-server-error': {
    code: 500,
    en: 'Internal Server Error'
  },
  'not-implemented': {
    code: 501,
    en: 'Not Implemented'
  },
  'bad-gateway': {
    code: 502,
    en: 'Bad Gateway'
  },
  'service-unavailable': {
    code: 503,
    en: 'Service Unavailable'
  },
  'gateway-timeout': {
    code: 504,
    en: 'Gateway Timeout'
  },
  'http-version-not-supported': {
    code: 505,
    en: 'HTTP Version Not Supported'
  },
  'variant-also-negotiates': {
    code: 506,
    en: 'Variant Also Negotiates'
  },
  'insufficient-storage': {
    code: 507,
    en: 'Insufficient Storage'
  },
  'loop-detected': {
    code: 508,
    en: 'Loop Detected'
  },
  'bandwidth-limit-exceeded': {
    code: 509,
    en: 'Bandwidth Limit Exceeded'
  },
  'not-extended': {
    code: 510,
    en: 'Not Extended'
  },
  'network-authentication-required': {
    code: 511,
    en: 'Network Authentication Required'
  }
};

export default class HttpError extends Error {
  constructor(code, message, ...args) {
    this.type = Object.values(HttpStatusCodes).find(status => status.code == code)
    super(message || (this.type && this.type.en) || '', ...args)
    this.code = code
  }
}
