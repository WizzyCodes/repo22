import { Application, Request, Response } from "express";

export const mainApp = async (app: Application) => {
  try {
    app.use("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "Awesome Api",
        });
      } catch (error) {
        res.status(404).json({ message: "Error" });
      }
    });
  } catch (error) {
    return error;
  }
};
