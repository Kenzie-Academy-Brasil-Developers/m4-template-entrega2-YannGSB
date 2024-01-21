import { Router } from "express";
import { BooksControllers } from "../controllers/books.controllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { IsBookAlreadyRegistered } from "../middlewares/isBookAlreadyRegistered.middleware";

export const booksRouter = Router();

const booksControllers = new BooksControllers();

booksRouter.post(
  "/",
  IsBookAlreadyRegistered.execute,
  booksControllers.addBook
);
booksRouter.get("/", booksControllers.getAll);
booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getById);
booksRouter.patch(
  "/:id",
  IsBookIdValid.execute,
  IsBookAlreadyRegistered.execute,
  booksControllers.updateBook
);
booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook);
