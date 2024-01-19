import 'server-only'
import Home from '@/components/Home-mobile/Home'
import { Welcome, YhZav } from '@/interfaces'
import fs from "fs"
import { parseString } from "xml2js"
import styles from './page.module.css'
import { Montserrat } from "next/font/google"
import Table from '@/components/ui-mob/Table'
import { useMemo } from 'react'

export interface Iid{
  id: string
}

const montserrat = Montserrat({ 
    variable: '--font-montserrat',
    subsets: ['latin'],
})
export const Services = (() => {
  const xmldata = fs.readFileSync('public/rs202320.xml', 'utf-8')
 
      parseString(xmldata, function (err, results){ 
          if(err){
            return null
          }else{
            let data = (JSON.stringify(results))
            fs.writeFileSync('public/data.json', data, 'utf-8')  
          }})
        
  const data: Welcome = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))

  return {
      getData(): Welcome {
          const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))
          return data
      }
      
  }
})()

export default async function HomePage({id}:Iid) { 
  const data = Services.getData()
  const dataTable = Services.getData()
  let filtered
  id ? (
    filtered = data.YhZav.ListGroup[0].Group.filter(function (group){
      return group.$.Name === String(id)
    })
    
  ) : ('')
  filtered ? data.YhZav.ListGroup[0].Group = filtered : ''
  
  const memorizedHome = useMemo(() => {
    return (
      <div className={montserrat.className}>
        <Table N={dataTable} />
        <Home YhZav={data.YhZav} />
      </div>
      )
  },[])
  return (
    <section >
      
      {memorizedHome}
    </section>
  )

}
