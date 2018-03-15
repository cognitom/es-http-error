/* eslint-env mocha */
import {equal} from 'assert'
import EnHttpError, {httpCodes as enHttpCodes} from '../langs/en.js'
import JaHttpError, {httpCodes as jaHttpCodes} from '../langs/ja.js'

describe('en - English', () => {
  it('says a translated message', () => {
    try {
      throw new EnHttpError(404)
    } catch (e) {
      equal(e.message, 'Not Found')
    }
  })
  it('exports httpCodes as well', () => {
    try {
      throw new EnHttpError(enHttpCodes.notFound)
    } catch (e) {
      equal(e.code, 404)
    }
  })
})

describe('ja - Japanese', () => {
  it('says a translated message', () => {
    try {
      throw new JaHttpError(404)
    } catch (e) {
      equal(e.message, '未検出')
    }
  })
  it('exports httpCodes as well', () => {
    try {
      throw new JaHttpError(jaHttpCodes.notFound)
    } catch (e) {
      equal(e.code, 404)
    }
  })
})
