import { Request } from "express"
import { validationResult, ValidationError } from "express-validator"

export const validateRequest = (
  req: Request
): [boolean, ValidationError[] | undefined] => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return [false, errors.array()]
  } else {
    return [true, undefined]
  }
}

export const isEmptyParam = (params: string) => {
  return params === null || params === undefined || params !== ""
}