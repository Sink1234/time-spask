import Home from '@/components/Home-mobile/Home'
import { Welcome, YhZav } from '@/interfaces'
import fs from "fs"
import { parseString } from "xml2js"
import 'server-only'
import styles from './page.module.css'
import { Montserrat } from "next/font/google"

const montserrat= Montserrat({ 
    display: 'swap',
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export default async function HomePage() {

  const xmldata = fs.readFileSync('public/rs202320.xml', 'utf-8')
 
      parseString(xmldata, function (err, results){ 
          if(err){
            return null
          }else{
            let data = (JSON.stringify(results))
            fs.writeFileSync('public/data.json', data, 'utf-8')  
          }})
        
  const data: Welcome = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'))
  console.log('result', data.YhZav.Week[0])
  return (
    <section className={montserrat.className}>
      <Home YhZav={data.YhZav}/>
    </section>
  )
}
