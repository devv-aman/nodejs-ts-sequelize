import { Application } from "express"

type Wrapper = (app: Application) => void

export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  app: Application
): void => {
  for (const wrapper of middlewareWrappers) {
    wrapper(app)
  }
}
