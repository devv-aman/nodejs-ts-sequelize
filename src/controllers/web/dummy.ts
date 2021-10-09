import { Request, Response } from "express"

export default class DummyController {
  public static getDummyData = () => {
    return [
      async (req: Request, res: Response) => {
        res.send("")
      }
    ]
  }
}
