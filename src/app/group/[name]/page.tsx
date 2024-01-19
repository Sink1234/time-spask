import HomePage from "@/app/page"
import * as express from 'express';
import { Request } from "express"
declare namespace Express {
    export interface Request {
        id: string;
    }}

  export default function groupPage (req:Request, res:Response){
      const id = decodeURIComponent(req.params.name)
      return(
          <HomePage id={id} />
      )
  }
