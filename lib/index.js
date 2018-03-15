import dictionary from '../languages/en.js'
export {httpCodes} from './status-codes.js'

export default class HttpError extends Error {
  constructor (code, message, ...args) {
    super(message || dictionary[code] || '', ...args)
    this.code = code
  }
}
