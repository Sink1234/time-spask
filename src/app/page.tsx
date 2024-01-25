import 'server-only'
import { Welcome, YhZav } from '@/interfaces'
import fs from "fs"
import { parseString } from 'xml2js'
import { Montserrat } from "next/font/google"
import path from 'path';


const montserrat = Montserrat({ 
    variable: '--font-montserrat',
    subsets: ['latin'],
})

const getDataPath = (filename: string) => path.join(process.cwd(),'src', 'lib', 'data', filename);
const getXMLPath = (filename: string) => path.join(process.cwd(), 'public', filename); 

const xmldata = fs.readFileSync(getXMLPath('rs.xml'), 'utf-8')

parseString(xmldata, function (err: any, results: any){ 
    if(err){
      return null
    }else{
      let data = (JSON.stringify(results))
      fs.writeFileSync(getDataPath('data.json'), data, 'utf-8')  
}})


          
export default async function HomePage() { 
  const data: Welcome = JSON.parse(fs.readFileSync(getDataPath(`data.json`), 'utf-8'))
  
  return (
    <section >
      <div className={montserrat.className}>
      </div>
    </section>
  )

}
