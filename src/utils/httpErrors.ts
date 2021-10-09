import { ERRORS } from "../constants"

interface ErrorType {
  error: string
  status: number
}

export abstract class HTTPClientError extends Error {
  readonly statusCode!: number
  readonly name!: string

  constructor(message: ErrorType) {
    if (message instanceof Object) {
      super(JSON.stringify(message))
    } else {
      super(message)
    }
    this.name = message.error
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON() {
    return {
      error: this.name,
      code: this.statusCode
    }
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400

  constructor(message = ERRORS.BAD_REQUESTS) {
    super({
      error: message,
      status: 400
    })
  }
}

export class HTTP401Error extends HTTPClientError {
  readonly statusCode = 401

  constructor(message = ERRORS.UNAUTHORIZED) {
    super({
      error: message,
      status: 401
    })
  }
}

export class HTTP403Error extends HTTPClientError {
  readonly statusCode = 403

  constructor(message = ERRORS.FORBIDDEN) {
    super({
      error: message,
      status: 403
    })
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404

  constructor(message = ERRORS.NOT_FOUND) {
    super({
      error: message,
      status: 404
    })
  }
}

export class HTTP500Error extends HTTPClientError {
  readonly statusCode = 500

  constructor(message = ERRORS.INTERNAL_SERVER_ERROR) {
    super({
      error: message,
      status: 500
    })
  }
}
