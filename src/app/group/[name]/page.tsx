import HomePage from "@/app/page"

export interface IReq{
    params: any
    req: IPar
}
export interface IPar{
    params: IName
}
export interface IName{
    name: string
    searchParams: string
}

export default function groupPage(req:IReq){
    const id = decodeURIComponent(req.params.name)
    return(
        <HomePage id={id} />
    )
}