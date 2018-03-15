/* eslint-env mocha */
import {ok, equal} from 'assert'
import HttpError, {httpCodes} from '../lib/'

describe('HttpError', () => {
  it('is HttpError', () => {
    try {
      throw new HttpError(404)
    } catch (e) {
      ok(e instanceof HttpError)
    }
  })
  it('is a subclass of Error', () => {
    try {
      throw new HttpError(404)
    } catch (e) {
      ok(e instanceof Error)
    }
  })
  it('has a status code', () => {
    try {
      throw new HttpError(404)
    } catch (e) {
      equal(e.code, 404)
    }
  })
  it('says a default message', () => {
    try {
      throw new HttpError(404)
    } catch (e) {
      equal(e.message, 'Not Found')
    }
  })
  it('says a custom message', () => {
    try {
      throw new HttpError(404, "Where're you going?")
    } catch (e) {
      equal(e.message, "Where're you going?")
    }
  })
  it('creates a new one via httpCodes', () => {
    try {
      throw new HttpError(httpCodes.notFound)
    } catch (e) {
      equal(e.code, 404)
    }
  })
})
