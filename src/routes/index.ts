import { Express, NextFunction, Request, Response } from "express";
// import eventRoute from "./event.route";
import authRoute from "./auth.route";
import { Errors, handleError } from "../helpers/error";
import userRoute from "./user.route";
import testRoute from "./test.route";
import flashcardRoute from "./flashCard.route";
import playlistRoute from "./playlist.route";
import adminTestRoute from "./test.admin.route";

const route = (app: Express) => {
  app.use("/hihi", (req, res, next) => {
    res.json({ a: "aaanvb" });
  });
  app.use("/auth", authRoute);

  app.use("/user", userRoute);

  app.use("/tests", testRoute);

  app.use("/admin/tests", adminTestRoute);

  app.use("/flashcards", flashcardRoute);

  app.use("/playlists", playlistRoute);

  app.use("/transferFile", adminTestRoute);

  app.all("*", (req: Request, res: Response, next: NextFunction) => {
    next(Errors.NotFound);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    handleError(err, res);
  });
};

export default route;
