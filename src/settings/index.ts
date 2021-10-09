import accessEnv from "../helpers/accessEnv"

export default {
  NODE_ENV: accessEnv("NODE_ENV", "development"),
  APP_HOST: accessEnv("APP_HOST", "localhost"),
  APP_PORT: +accessEnv("APP_PORT", "3000"),
  REDIS: {
    CONNECTION: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      PORT: +accessEnv("REDIS_PORT")!,
      HOST: accessEnv("REDIS_HOST"),
      PASSWORD: accessEnv("REDIS_PASSWORD")
    }
  },
  DB: {
    CONNECTION: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      PORT: +accessEnv("DB_PORT")!,
      HOST: accessEnv("DB_HOST"),
      USER: accessEnv("DB_USER"),
      PASSWORD: accessEnv("DB_PASSWORD"),
      NAME: accessEnv("DB_DATABASE")
    }
  },
  SENTRY: {
    DSN: accessEnv("SENTRY_DSN")
  },
  JWT: {
    SECRET_KEY: accessEnv("JWT_SECRET_KEY")
  }
}
