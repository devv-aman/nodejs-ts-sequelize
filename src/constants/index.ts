export const ROUTES = {
  BASE: "/api/v1",
  AUTH: {
    BASE: "/auth",
    ROUTES: {
      INFO: "/info"
    }
  },
  WEB: {
    BASE: "/web",
    ROUTES: {
      DUMMY: "/dummy"
    }
  }
}

export const ERRORS = {
  MISSING_QUERY_PARAMS: "Missing Query parameter",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  FORBIDDEN: "Forbidden",
  BAD_REQUESTS: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  NOT_FOUND: "Not found"
}

export const CONNECTIONS_LOG = {
  REDIS: "Redis client connected",
  DB_CONNECTED: "Database connection has been established successfully.",
  DB_CONNECTION_ERROR: "Unable to connect to the database",
  SOCKET_CONNECTED: "Socket is connected",
  SOCKET_DISCONNECTING: "Socket is disconnecting"
}
