import HomePage from "@/app/page"
import {Request} from 'express'

export default function groupPage (req:Request){
    const id = decodeURIComponent(req.params.name)
    return(
        <HomePage id={id} />
    )
}