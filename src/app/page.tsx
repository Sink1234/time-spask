import Home from '@/components/Home-mobile/Home'
import { Welcome, YhZav } from '@/interfaces'
import fs from "fs"
import { parseString } from "xml2js"
import 'server-only'

export default function HomePage() {

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
    <>
      <Home YhZav={data.YhZav}/>
    </>
  )
}
