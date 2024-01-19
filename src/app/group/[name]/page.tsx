import HomePage from "@/app/page"

  export default function groupPage (
    req: { params: { name: string } }
    ){
      const id = decodeURIComponent(req.params.name)
      return(
          <HomePage id={id} />
      )
  }
