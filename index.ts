import express, { Request, Response, Express } from "express";
import { employee, Prisma, PrismaClient, PrismaPromise } from "@prisma/client";

const prisma = new PrismaClient();

const app: Express = express();

const port: number = 3000;

app.get("/", async (req: Request, res: Response) => {

  try {

    let result: Prisma.BatchPayload= await prisma.employee.updateMany({
      where: {
        name: "Isaac",
      },
      data: {
        email: "kool@gmail.com",
      },
    });

    res.send(`${result} - Data deleted.`);
  } 
  
  catch (e) {
    console.log((e as Error).message);
  }

});

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port} 🔥`);
});
