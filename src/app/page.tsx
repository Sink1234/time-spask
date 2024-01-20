import 'server-only'
import Home from '@/components/Home-mobile/Home'
import { Welcome, YhZav } from '@/interfaces'
import fs from "fs"
import { parseString } from 'xml2js'
import { Montserrat } from "next/font/google"
import Table from '@/components/ui-mob/Table'


const montserrat = Montserrat({ 
    variable: '--font-montserrat',
    subsets: ['latin'],
})

const xmldata = fs.readFileSync('public/rs202320.xml', 'utf-8')
 
parseString(xmldata, function (err, results){ 
    if(err){
      return null
    }else{
      let data = (JSON.stringify(results))
      fs.writeFileSync('public/data.json', data, 'utf-8')  
}})

export const Service=(()=>{
  return{
    getData(){
      const data: Welcome = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))
      return data
    }
  }
})
          

export default async function HomePage() { 
  const data = Service()
  
  return (
    <section >
      <div className={montserrat.className}>
        <Table N={data.getData()} />
        <Home YhZav={data.getData().YhZav} />
      </div>
    
    </section>
  )

}