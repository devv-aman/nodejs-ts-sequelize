import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleCookie
} from "./common"

import { handleRateLimit, handleHTTPHeaders } from "./security"
import { handleLogging } from "./logging"
import { setRequestId } from "./request"
export default [
  setRequestId,
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleCookie,
  handleRateLimit,
  handleHTTPHeaders,
  handleLogging
]
