export default dictionary => class extends Error {
  constructor (code, message, ...args) {
    super(message || dictionary[code] || '', ...args)
    this.code = code
  }
}
