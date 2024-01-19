import HomePage from "@/app/page"
import {Request} from 'express'
export interface Iid extends Request {
  id: string // or any other type
}
export default function groupPage (req:Iid){
    const id = decodeURIComponent(req.params.name)
    return(
        <HomePage id={id} />
    )
}
