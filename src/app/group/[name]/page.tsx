import HomePage from "@/app/page"
import fs from "fs"
import { Welcome } from '@/interfaces'
import Table from "@/components/ui-mob/Table"
import Home from "@/components/Home-mobile/Home"
import { Montserrat } from "next/font/google"


const montserrat = Montserrat({ 
  variable: '--font-montserrat',
  subsets: ['latin'],
})



const dataTable: Welcome = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))
export default function groupPage (
  req: { params: { name: string } }
  ){
    const id = decodeURIComponent(req.params.name)
    const data: Welcome = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))
    let filtered
    id ? (
      filtered = data.YhZav.ListGroup[0].Group.filter(function (group){
      return group.$.Name === String(id)
    })
    ) : ('')
  filtered ? data.YhZav.ListGroup[0].Group = filtered : ''
    
    
    return(
      <section >
      <div className={montserrat.className}>
        <Table N={dataTable} />
        <Home YhZav={data.YhZav} />
      </div>
    
    </section>
    )
}