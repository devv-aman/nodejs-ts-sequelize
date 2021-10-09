import { Request, Response } from "express"

export default class UserAuthController {
  public static getUserInfo = () => {
    return [
      async (req: Request, res: Response) => {
        const response = {
          uuid: req.user.uuid,
          username: req.user.username
        }
        res.send(response)
      }
    ]
  }
}
