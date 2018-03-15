# es-http-error

HttpError class for browsers (without Node.js dependencies)

## Installation

```bash
$ npm install es-http-error
```

## Usage

```javascript
throw new HttpError(404) // 'Not Found' as a default message
throw new HttpError(401, 'Unauthorized') // Custom Error Message
throw new HttpError(statusCodes.notFound); // Using with enums
```

[Supported http status codes are here](index.js).


## Example

```javascript
import HttpError, {statusCodes} from 'es-http-error'

main()
async function main (id) {
  try {
    // retrieve some data from API server
    const res = await fetch('/api/something/great')
    // check the response and throw an error if it's not ok
    if (!res.ok) throw new HttpError(res.status)
    
    // for example, render the view by lit-html
    const render(view(await res.json()), document.body)
  } catch (e) {
    if (e instanceof HttpError) {
      if (e.code === 401) logout() // check the code simply by number
      if (e.code === statusCodes.notFound) notFound() // or via statusCodes
    } else throw e
  }
}
```

## i18n

```javascript
import HttpError, {statusCodes} from 'es-http-error/langs/ja'

try {
  throw new HttpError(404)
} catch (e) {
  console.log(e.message) // translated message "未検出"
}
```

[Supported languages are listed here](langs/).

## Motivation

There're some prior arts like below, but I couldn't find the one for browsers. So I made it.

- [boom](https://github.com/hapijs/boom)
- [http-errors](https://github.com/jshttp/http-errors)
- [http-error](https://github.com/c9/node-http-error) - So close! But it has dependency for `util`.

...etc.

## License

MIT
