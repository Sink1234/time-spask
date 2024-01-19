import HomePage from "@/app/page"
import { Request } from "express"
declare namespace Express {
    export interface Request {
        id: string;
    }}

  export default function groupPage (req:Request){
      const id = decodeURIComponent(req.params.name)
      return(
          <HomePage id={id} />
      )
  }
