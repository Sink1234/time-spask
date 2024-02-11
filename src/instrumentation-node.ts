import path from "path";
import fs from "fs";
import {parseString} from "xml2js";

const getDataPath = (filename: string) => path.join(process.cwd(), 'src','shared', 'lib', 'data', filename);
const getXMLPath = (filename: string) => path.join(process.cwd(), 'public', filename);

const xmlData = fs.readFileSync(getXMLPath('rs.xml'), 'utf-8')

parseString(xmlData, function (err, results) {
    if (err) {
        return null
    } else {
        fs.writeFileSync(getDataPath('data.json'), JSON.stringify(results), 'utf-8')
    }
})