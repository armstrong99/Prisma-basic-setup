import express, { Request, Response, Express } from "express";
import { employee, Prisma, PrismaClient, PrismaPromise } from "@prisma/client";

const prisma = new PrismaClient();

const app: Express = express();

const port: number = 3000;

app.get("/", async (req: Request, res: Response) => {
   
  try {

      await prisma.employee.create({
          data: {
            email: "jacob@gmail.com" + new Date().getSeconds().toString(),
            name: "Peter Ducker",
          },
        });
      
        let foundEmployees: employee[] = await prisma.employee.findMany();
      
        console.log(foundEmployees)
      
        res.send(foundEmployees); 
  } 
  
  catch (e) {
       console.log((e as Error).message)
  }

});

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port} 🔥`);
});
